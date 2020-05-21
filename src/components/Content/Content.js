import React from "react";

import Hero from "./Hero/Hero";
import Grid from "./Grid/Grid";
import Heading from "./Heading/Heading";
import Text from "./Text/Text";
import Image from "./Image/Image";
import Gallery from "./Gallery/Gallery.js";
import Button from "./Button/Button.js";
import TextWithImage from "./TextWithImage/TextWithImage";
import ImageWithText from "./ImageWithText/ImageWithText";
import GreenBg from "./GreenBg/GreenBg";
import Prices from "./Prices/Prices";
import ContactForm from "./ContactForm/ContactForm";
import RecipeDetails from "./RecipeDetails/RecipeDetails";
import Recipes from "./Recipes/Recipes";

export default ({ content }) => {
	switch (content.component) {
		case "section":
			const type = content.settings.type
				? content.settings.type.toLowerCase()
				: null;

			switch (type) {
				case "hero":
					return <Hero content={content} />;
				case "text-with-image":
					return <TextWithImage content={content} />;
				case "green-bg":
					return <GreenBg content={content} />;
				case "image-with-text":
					return <ImageWithText content={content} />;
				default:
					return null;
			}
		case "grid":
			return <Grid content={content} />;
		case "heading":
			return <Heading content={content} />;
		case "text":
			return <Text content={content} />;
		case "image":
			return <Image content={content} />;
		case "gallery":
			return <Gallery content={content} />;
		case "button":
			return <Button content={content} />;
		case "prices":
			return <Prices content={content} />;
		case "recipes":
			return <Recipes content={content} />;
		case "contactForm":
			return <ContactForm content={content} />;
		case "recipeDetails":
			return <RecipeDetails content={content} />;
		default:
			return null;
	}
};
