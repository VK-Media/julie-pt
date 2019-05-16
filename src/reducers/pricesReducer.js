import { FETCH_PRICES } from '../actions/types'

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_PRICES:
            return action.payload
        default:
            return state
    }
}