import { FETCH_PAGES } from '../types'

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_PAGES:
            return action.payload
        default:
            return state
    }
}
