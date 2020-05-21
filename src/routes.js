import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Page from "./components/Page/Page";
import { addRoutes } from "./actions";

const Routes = () => {
	const dispatch = useDispatch();
	const pages = useSelector(state => state.pages);
	const recipes = useSelector(state => state.recipes);
	const routes = useSelector(state => state.routes);

	useEffect(() => {
		const pagesRoutes = pages.map(page => {
			page.path = `/${page.title_slug}`;

			return page;
		});

		const recipesRoutes = recipes.map(recipe => {
			recipe.path = `/opskrifter/${recipe.title_slug}`;

			return recipe;
		});

		const routes = pagesRoutes.concat(recipesRoutes);

		dispatch(addRoutes(routes));
	}, [pages, recipes, dispatch]);

	const renderRoutes = () => {
		return routes.map(route => {
			if (route) {
				if (route.landingpage) {
					return (
						<Route
							key={route._id}
							path="/"
							exact
							render={() => <Page page={route}/>}
						/>
					);
				}

				return (
					<Route
						key={route._id}
						path={route.path}
						exact
						render={() => <Page page={route}/>}
					/>
				);
			}

			return null;
		});
	};

	return <Router>{renderRoutes()}</Router>;
};

export default Routes;
