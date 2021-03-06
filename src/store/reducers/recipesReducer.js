import { FETCH_RECIPES } from '../types'

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_RECIPES:
            return action.payload
        default:
            return state
    }
};
