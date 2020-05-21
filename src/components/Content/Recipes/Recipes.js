import React from "react";
import { useSelector } from "react-redux";
import { find } from "lodash";
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
				return <div className="categories">{categoryElements}</div>;
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
						<div className="title">{recipe.title}</div>
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
