const closeHeaderBarReducer = (state = false, action) => {
    switch(action.type){
        case 'CLOSE_HEADER_BAR': 
            return true;
        default:
            return state;
    }
}

export default closeHeaderBarReducer;