import { collections } from '../../apis/cms'
import { fetchRecipesSuccess } from '../actions'

export const fetchRecipes = () => async dispatch => {
    const response = await collections.post('/recipes', {
            filter: { published: true }
        },
        {
            headers: {
                'Cockpit-Token': 'dc2fc0f70cc4095cdd8cd5cd1f062f',
                'Content-Type': 'application/json'
            }
        }
    )

    dispatch(fetchRecipesSuccess(response.data.entries))
}
