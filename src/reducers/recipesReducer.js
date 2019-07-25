import _ from "lodash";

import { FETCH_RECIPES } from "../actions/types";

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_RECIPES:
			return _.filter(action.payload, recipe => recipe.published);
		default:
			return state;
	}
};
