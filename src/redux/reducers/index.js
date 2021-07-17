import {combineReducers} from 'redux'

import counterReducer from './page/home/counter';
import toggleProductDropdownReducer from './common/navigationBar/toggleProductDropdown';
import toggleMenuReducer from './common/navigationBar/toggleMenu';

const allReducers = combineReducers({
    counter: counterReducer,
    toggleMenu: toggleMenuReducer,
    toggleProductDropdown: toggleProductDropdownReducer,

})

export default allReducers;