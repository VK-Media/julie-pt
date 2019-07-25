import { collections } from "../apis/cms";

import { FETCH_PAGES } from "./types";

export const fetchPages = () => async dispatch => {
  let response = { data: { entries: {} } };

  response = await collections.get("/Pages");

  dispatch({ type: FETCH_PAGES, payload: response.data.entries });
};
