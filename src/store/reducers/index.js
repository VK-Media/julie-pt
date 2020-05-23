import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

import pagesReducer from "./pagesReducer";
import headerReducer from "./headerReducer";
import footerReducer from "./footerReducer";
import menuReducer from "./menuReducer";
import pricesReducer from "./pricesReducer";
import recipesReducer from "./recipesReducer";

export default combineReducers({
	pages: pagesReducer,
	header: headerReducer,
	footer: footerReducer,
	showMenu: menuReducer,
	prices: pricesReducer,
	recipes: recipesReducer,
	form: reduxFormReducer
});
