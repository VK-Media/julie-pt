import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import pagesReducer from './pagesReducer'
import headerReducer from './headerReducer'
import footerReducer from './footerReducer'

export default combineReducers({
    pages: pagesReducer,
    header: headerReducer,
    footer: footerReducer,
    form: reduxFormReducer
})