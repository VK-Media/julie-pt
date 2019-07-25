import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import Page from "./components/Page/Page";

class Routes extends Component {
	renderRoutes = () => {
		const pageRoutes = this.props.pages.map(page => {
			if (page.landingpage) {
				return (
					<Route
						key={page._id}
						path="/"
						exact
						render={() => <Page page={page} />}
					/>
				);
			}

			return (
				<Route
					key={page._id}
					path={"/" + page.title_slug}
					exact
					render={() => <Page page={page} />}
				/>
			);
		});

		const recipeRoutes = this.props.recipes.map(recipe => {
			return (
				<Route
					key={recipe._id}
					path="/"
					exact
					render={() => <Page page={recipe} />}
				/>
			);
		});

		return pageRoutes.concat(recipeRoutes);
	};

	render = () => {
		return <Router>{this.renderRoutes()}</Router>;
	};
}

const mapStateToProps = state => {
	return {
		pages: state.pages,
		recipes: state.recipes
	};
};

export default connect(
	mapStateToProps,
	{}
)(Routes);
