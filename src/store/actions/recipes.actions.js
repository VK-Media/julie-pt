import { FETCH_RECIPES } from '../types'

export const fetchRecipesSuccess = (recipes) => ({ type: FETCH_RECIPES, payload: recipes })
