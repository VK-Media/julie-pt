import { TOGGLE_MENU } from '../actions/types'

export default (state = false, action) => {
    switch (action.type) {
        case TOGGLE_MENU:
            return !state
        default:
            return state
    }
}