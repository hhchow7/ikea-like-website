const toggleMenuReducer = (state = false, action) => {
    switch(action.type){
        case 'TOGGLE_NAVIGATION_BAR_MENU': 
            return !state;
        case 'CLOSE_NAVIGATION_BAR_MENU':
            return false;
        default:
            return state;
    }
}

export default toggleMenuReducer;