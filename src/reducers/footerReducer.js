import { FETCH_FOOTER } from '../actions/types'

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_FOOTER:
            return action.payload
        default:
            return state
    }
}