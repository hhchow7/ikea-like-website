const toggleProductDropdownReducer = (state = false, action) => {
    switch(action.type){
        case 'TOGGLE_NAVIGATION_BAR_PRODUCT_DROPDOWN': 
            return !state;
        default:
            return state;
    }
}

export default toggleProductDropdownReducer;