import React from "react";

import "./RecipeDetails.scss";

export default ({ content }) => {
	console.log(content);

	return (
		<section className="recipe-details">
			<div className="icons">
				<div>
					<i className="fas fa-utensils fa-3x" />
					<p>{content.settings.portions}</p>
				</div>
				<div>
					<i className="fas fa-clock fa-3x" />
					<p>{content.settings.preparationTime}</p>
				</div>
			</div>
			<div className="details">
				<div
					dangerouslySetInnerHTML={{
						__html: content.settings.ingredients
					}}
				/>
				<div
					dangerouslySetInnerHTML={{
						__html: content.settings.method
					}}
				/>
			</div>
		</section>
	);
};
