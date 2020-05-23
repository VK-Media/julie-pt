import { singletons } from '../../apis/cms'
import { FETCH_FOOTER } from '../types'

export const fetchFooter = () => async dispatch => {
    let response = { data: {} }

    response = await singletons.get('/footer')

    dispatch({ 'type': FETCH_FOOTER, 'payload': response.data })
}
