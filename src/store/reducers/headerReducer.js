import { FETCH_HEADER } from '../types'

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_HEADER:
            return action.payload
        default:
            return state
    }
}
