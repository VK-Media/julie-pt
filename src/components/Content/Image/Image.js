import React from "react";
import _ from "lodash";

import "./Image.scss";

export default ({ content }) => {
	const renderImage = () => {
		const imagePath = content.settings.image
			? "https://admin.julie-pt.dk/" + content.settings.image.path
			: null;

		if (imagePath) {
			const ratioArray = content.settings.ratio
				? content.settings.ratio.split(":")
				: null;
			const ratio = !_.isEmpty(ratioArray)
				? parseInt(ratioArray[1]) / parseInt(ratioArray[0])
				: 16 / 9;
			const title = content.settings.description
				? content.settings.description
				: null;
			const style = {
				backgroundImage: `url('${imagePath}')`,
				paddingBottom: ratio * 100 + "%"
			};

			return (
				<div title={title} className="image__image" style={style}></div>
			);
		}

		return null;
	};

	const renderFilter = () => {
		if (content.settings.filter) {
			return <div className="image__filter"></div>;
		}

		return null;
	};

	return (
		<div className="image">
			{renderImage()}
			{renderFilter()}
		</div>
	);
};
