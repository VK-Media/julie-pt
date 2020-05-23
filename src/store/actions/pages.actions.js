import { FETCH_PAGES } from '../types'

export const fetchPagesSuccess = (pages) => ({ type: FETCH_PAGES, payload: pages })
