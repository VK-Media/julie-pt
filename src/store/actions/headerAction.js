import { singletons } from '../../apis/cms'
import { FETCH_HEADER } from '../types'

export const fetchHeader = () => async dispatch => {
    let response = { data: {} }

    response = await singletons.get('/header')

    dispatch({ 'type': FETCH_HEADER, 'payload': response.data })
}
