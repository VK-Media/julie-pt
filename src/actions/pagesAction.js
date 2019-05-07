import { collections } from '../apis/cms'

import { FETCH_PAGES } from './types'

export const fetchPages = () => async dispatch => {
    let response = { data: { pages: {} } }

    response = await collections.get('/pages')

    dispatch({ 'type': FETCH_PAGES, 'payload': response.data.entries })
}