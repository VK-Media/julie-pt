import React from "react";

import "./RecipeDetails.scss";

export default ({ content }) => {
	return (
		<section className="recipe-details">
			<div className="icons">
				<div>
					<i className="far fa-utensils fa-2x" />
					<p>{content.settings.portions}</p>
				</div>
				<div>
					<i className="far fa-clock fa-2x" />
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
