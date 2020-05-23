import { collections } from '../../apis/cms'
import { FETCH_PRICES } from '../types'

export const fetchPrices = () => async dispatch => {
    let response = { data: { entries: {} } }

    response = await collections.get('/Prices')

    dispatch({ type: FETCH_PRICES, payload: response.data.entries })
}
