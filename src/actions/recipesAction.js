import { collections } from '../apis/cms'
import { FETCH_RECIPES } from './types'

export const fetchRecipes = () => async dispatch => {
    let response = { data: { entries: {} } }

    response = await collections.post('/recipes', {
            filter: { published: true }
        },
        {
            headers: {
                'Cockpit-Token': 'dc2fc0f70cc4095cdd8cd5cd1f062f',
                'Content-Type': 'application/json'
            }
        }
    )

    dispatch({ type: FETCH_RECIPES, payload: response.data.entries })
}
