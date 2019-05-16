import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import pagesReducer from './pagesReducer'
import headerReducer from './headerReducer'
import footerReducer from './footerReducer'
import menuReducer from './menuReducer'
import pricesReducer from './pricesReducer'

export default combineReducers({
    pages: pagesReducer,
    header: headerReducer,
    footer: footerReducer,
    showMenu: menuReducer,
    prices: pricesReducer,
    form: reduxFormReducer
})