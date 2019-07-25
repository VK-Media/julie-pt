import { collections } from "../apis/cms";

import { FETCH_RECIPES } from "./types";

export const fetchRecipes = () => async dispatch => {
  let response = { data: { entries: {} } };

  response = await collections.get("/recipes");

  dispatch({ type: FETCH_RECIPES, payload: response.data.entries });
};
