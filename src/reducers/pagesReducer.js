import _ from 'lodash'

import { FETCH_PAGES } from '../actions/types'

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_PAGES:
            return _.filter(action.payload, page => page.published)
        default:
            return state
    }
}