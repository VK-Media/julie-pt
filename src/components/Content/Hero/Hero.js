import React from "react";
import _ from "lodash";

import Heading from "../Heading/Heading";

import "./Hero.scss";

export default ({ content }) => {
	const getImageUrl = () => {
		const firstImage = _.find(content.children, child => child.component === "image");
		const image = firstImage ? firstImage.settings.image : null;

		if (image) return "https://admin.julie-pt.dk/" + image.path;

		return null;
	};

	const getHeading = () => {
		const firstHeading = _.find(content.children, child => child.component === "heading");

		if (firstHeading) return <Heading className="hero__content" content={firstHeading}/>;

		return null;
	};

	return (
		<div className="hero" style={{ backgroundImage: `url('${getImageUrl()}')` }}>
			<div className="image-filter"></div>
			{getHeading()}
		</div>
	);
}
