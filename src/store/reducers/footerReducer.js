import { FETCH_FOOTER } from '../types'

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_FOOTER:
            return action.payload
        default:
            return state
    }
}
