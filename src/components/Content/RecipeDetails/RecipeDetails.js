import React from "react";

import "./RecipeDetails.scss";

export default ({ content }) => {
	console.log(content);

	return (
		<section className="recipe-details">
			<div className="icons" />
			<div className="details" />
		</section>
	);
};
