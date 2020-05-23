import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import _, { find } from 'lodash'
import './Recipes.scss'
import { NavLink } from 'react-router-dom'

const Recipes = ({ content }) => {
    const recipes = useSelector(state => state.recipes)
    const [searchWords, setSearchWords] = useState('')
    const [selectedCategories, setSelectedCategories] = useState([])
    const [selectedRecipes, setSelectedRecipes] = useState([])

    useEffect(() => {
        const initialRecipes = content.settings.recipes.map(recipeData => {
            return find(recipes, recipe => recipe._id === recipeData._id)
        })

        if (initialRecipes.length) {
            setSelectedRecipes(initialRecipes)
        }
    }, [content, recipes])

    const searchRecipes = (searchWordsInput, categoriesInput) => {
        const initialRecipes = content.settings.recipes.map(recipeData => {
            return find(recipes, recipe => recipe._id === recipeData._id)
        })
        const searchWordsArray = searchWordsInput.split(' ')
        const matchingRecipes = initialRecipes.filter(recipe => {
            if (recipe) {
                let containsSearchWords = true
                let containsCategories = false

                if (Array.isArray(categoriesInput) && categoriesInput.length) {
                    if (Array.isArray(recipe.category)) {
                        containsCategories = recipe.category.some(category => categoriesInput.includes(category))
                    }
                } else {
                    containsCategories = true
                }

                if (searchWordsInput.length) {
                    for (const word of searchWordsArray) {
                        const lowerCaseTitle = recipe.title.toLowerCase()
                        const lowerCaseWord = word.toLowerCase()

                        if (lowerCaseTitle.indexOf(lowerCaseWord) === -1) {
                            containsSearchWords = false
                        }
                    }
                } else {
                    containsSearchWords = true
                }

                return containsSearchWords && containsCategories
            }

            return false
        })

        setSelectedRecipes(matchingRecipes)
    }

    const renderCategories = (categories) => {
        if (categories) {
            const categoryElements = categories.map(category => {
                return <div key={category} className="category">{category}</div>
            })

            if (categoryElements.length) {
                return <div className="recipe__categories">{categoryElements}</div>
            }
        }

        return null
    }

    const getImageUrl = (recipe) => {
        const firstImage = _.find(recipe.content, element => element.component === 'image')
        const image = firstImage ? firstImage.settings.image : null

        if (image) return 'https://admin.julie-pt.dk/' + image.path

        return null
    }

    const renderImage = (recipe) => {
        if (recipe) {
            const imageUrl = getImageUrl(recipe)

            if (imageUrl) {
                return <div className="recipe__image" style={{ backgroundImage: `url("${imageUrl}")` }}/>
            }
        }

        return null
    }

    const handleSearchBarInput = (event) => {
        const newValue = event.target.value
        setSearchWords(newValue)

        searchRecipes(newValue, selectedCategories)
    }

    const renderSearchBar = () => {
        return (
            <div className="recipes__search-bar">
                <input
                    type="text"
                    value={searchWords}
                    onChange={(event) => handleSearchBarInput(event)}
                    placeholder="Indtast søgeord..."
                />
            </div>
        )
    }

    const handleCategoryOptionClick = (option) => {
        let newCategories = []
        if (selectedCategories.includes(option)) {
            const index = selectedCategories.indexOf(option)

            if (index > -1) {
                newCategories = [...selectedCategories]

                newCategories.splice(index, 1)
                setSelectedCategories(newCategories)
            }
        } else {
            newCategories = [...selectedCategories, option]
            setSelectedCategories(newCategories)
        }

        searchRecipes(searchWords, newCategories)
    }

    const renderCategoryOption = (label) => {
        const classes = ['categories__option']

        if (selectedCategories.includes(label)) {
            classes.push('active')
        }

        return <div
            key={label}
            className={classes.join(' ')}
            onClick={() => handleCategoryOptionClick(label)}
        >{label}</div>
    }

    const renderCategoryFilters = () => {
        const options = ['Morgenmad', 'Frokost', 'Aftensmad', 'Snack']
        const optionElements = options.map(label => {
            return renderCategoryOption(label)
        })

        return (
            <div className="recipes__category-filters">
                {optionElements}
            </div>
        )
    }

    const renderRecipes = () => {
        if (!content.settings.recipes) return null

        const recipesElements = selectedRecipes.map(recipe => {
            if (recipe) {
                return (
                    <NavLink key={recipe._id} className="recipe" to={`/opskrifter/${recipe.title_slug}`}>
                        {renderImage(recipe)}
                        <div className="recipe__title">{recipe.title}</div>
                        {renderCategories(recipe.category)}
                    </NavLink>
                )
            }

            return null
        })

        if (recipesElements.length) {
            return <div className="recipes__container">{recipesElements}</div>
        }

        return <div>Der er på nuværende ingen opskrifter som matcher din søgning...</div>
    }

    return (
        <div className="recipes component">
            {renderSearchBar()}
            {renderCategoryFilters()}
            {renderRecipes()}
        </div>
    )
}

export default Recipes
