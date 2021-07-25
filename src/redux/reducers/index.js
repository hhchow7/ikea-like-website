import {combineReducers} from 'redux'

import counterReducer from './page/home/counter';
import closeHeaderBarReducer from './common/headerBar/closeHeaderBar';
import toggleProductDropdownReducer from './common/navigationBar/toggleProductDropdown';
import toggleMenuReducer from './common/navigationBar/toggleMenu';

const allReducers = combineReducers({
    counter: counterReducer,
    closeHeaderBar: closeHeaderBarReducer,
    toggleMenu: toggleMenuReducer,
    toggleProductDropdown: toggleProductDropdownReducer,
})

export default allReducers;