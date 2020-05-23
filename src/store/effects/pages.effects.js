import { collections } from '../../apis/cms'
import { fetchPagesSuccess } from '../actions'

export const fetchPages = () => async dispatch => {
    const response = await collections.post('/Pages', {
            filter: { published: true }
        },
        {
            headers: {
                'Cockpit-Token': 'dc2fc0f70cc4095cdd8cd5cd1f062f',
                'Content-Type': 'application/json'
            }
        }
    )

    dispatch(fetchPagesSuccess(response.data.entries))
}
