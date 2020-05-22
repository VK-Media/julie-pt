import React from "react";
import { useSelector } from "react-redux";
import _, { find } from "lodash";
import "./Recipes.scss";
import { NavLink } from "react-router-dom";

const Recipes = ({ content }) => {
	const recipes = useSelector(state => state.recipes);
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
		console.log(recipe);
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

	const renderRecipes = () => {
		if (!content.settings.recipes) return null;

		return selectedRecipes.map(recipe => {
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
	};

	return (
		<div className="recipes component">
			{renderRecipes()}
		</div>
	);
};

export default Recipes;
