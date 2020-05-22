import React, { useState } from "react";
import { useSelector } from "react-redux";
import _, { find } from "lodash";
import "./Recipes.scss";
import { NavLink } from "react-router-dom";

const Recipes = ({ content }) => {
	const recipes = useSelector(state => state.recipes);
	const [searchWords, setSearchWords] = useState("");
	const [selectedCategories, setSelectedCategories] = useState([]);
	const selectedRecipes = content.settings.recipes.map(recipeData => {
		return find(recipes, recipe => recipe._id === recipeData._id);
	});

	const renderCategories = (categories) => {
		if (categories) {
			const categoryElements = categories.map(category => {
				return <div key={category} className="category">{category}</div>;
			});

			if (categoryElements.length) {
				return <div className="recipe__categories">{categoryElements}</div>;
			}
		}

		return null;
	};

	const getImageUrl = (recipe) => {
		const firstImage = _.find(recipe.content, element => element.component === "image");
		const image = firstImage ? firstImage.settings.image : null;

		if (image) return "https://admin.julie-pt.dk/" + image.path;

		return null;
	};

	const renderImage = (recipe) => {
		if (recipe) {
			const imageUrl = getImageUrl(recipe);

			if (imageUrl) {
				return <div className="recipe__image" style={{ backgroundImage: `url("${imageUrl}")` }}/>;
			}
		}

		return null;
	};

	const renderSearchBar = () => {
		return (
			<div className="recipes__search-bar">
				<input
					type="text"
					value={searchWords}
					onChange={(event) => setSearchWords(event.target.value)}
					placeholder="Indtast søgeord..."
				/>
			</div>
		);
	};

	const handleCategoryOptionClick = (option) => {
		if (selectedCategories.includes(option)) {
			const index = selectedCategories.indexOf(option);

			if (index > -1) {
				const newSelected = [...selectedCategories];

				newSelected.splice(index, 1);
				setSelectedCategories(newSelected);
			}
		} else {
			setSelectedCategories([...selectedCategories, option]);
		}
	};

	const renderCategoryOption = (label) => {
		const classes = ["categories__option"];

		if (selectedCategories.includes(label)) {
			classes.push("active");
		}

		return <div key={label} className={classes.join(" ")} onClick={() => handleCategoryOptionClick(label)}>{label}</div>;
	};

	const renderCategoryFilters = () => {
		const options = ["Morgenmad", "Frokost", "Aftensmad", "Snack"];
		const optionElements = options.map(label => {
			return renderCategoryOption(label);
		});

		return (
			<div className="recipes__category-filters">
				{optionElements}
			</div>
		);
	};

	const renderRecipes = () => {
		if (!content.settings.recipes) return null;

		const recipesElements = selectedRecipes.map(recipe => {
			if (recipe) {
				return (
					<NavLink key={recipe._id} className="recipe" to={`/opskrifter/${recipe.title_slug}`}>
						{renderImage(recipe)}
						<div className="recipe__title">{recipe.title}</div>
						{renderCategories(recipe.category)}
					</NavLink>
				);
			}

			return null;
		});

		if (recipesElements.length) {
			return <div className="recipes__container">{recipesElements}</div>;
		}

		return null;
	};

	return (
		<div className="recipes component">
			{renderSearchBar()}
			{renderCategoryFilters()}
			{renderRecipes()}
		</div>
	);
};

export default Recipes;
