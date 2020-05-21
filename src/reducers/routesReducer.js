import { ADD_ROUTES } from "../actions/types";

export default (state = [], action) => {
	switch (action.type) {
		case ADD_ROUTES:
			return action.payload;
		default:
			return state;
	}
};
