import { ADD_ROUTES } from './types'

export const addRoutes = (routes) => {
	return { type: ADD_ROUTES, payload: routes }
}
