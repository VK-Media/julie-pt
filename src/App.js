import React, { Component } from "react";
import { connect } from "react-redux";
import ReactGA from "react-ga";

import {
	fetchPages,
	fetchHeader,
	fetchFooter,
	fetchPrices,
	fetchRecipes
} from "./actions";
import "./App.scss";
import Routes from "./routes";

class App extends Component {
	componentDidMount() {
		this.props.fetchPages();
		this.props.fetchHeader();
		this.props.fetchFooter();
		this.props.fetchPrices();
		this.props.fetchRecipes();

		ReactGA.initialize("UA-143417544-1");
	}

	render() {
		return this.props.pages ? <Routes /> : null;
	}
}

const mapStateToProps = state => {
	return {
		pages: state.pages
	};
};

export default connect(
	mapStateToProps,
	{ fetchPages, fetchHeader, fetchFooter, fetchPrices, fetchRecipes }
)(App);
