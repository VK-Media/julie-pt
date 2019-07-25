import React from "react";

import "./RecipeDetails.scss";

export default ({ content }) => {
	console.log(content);

	return (
		<section className="recipe-details">
			<div className="icons">
				<div>
					<i class="fas fa-utensils fa-2x" />
					<p>{content.portions}</p>
				</div>
				<div>
					<i class="fas fa-clock" />
					<p>{content.preparationTime}</p>
				</div>
			</div>
			<div className="details">
				<div
					dangerouslySetInnerHTML={{
						__html: content.ingredients
					}}
				/>
				<div
					dangerouslySetInnerHTML={{
						__html: content.method
					}}
				/>
			</div>
		</section>
	);
};
