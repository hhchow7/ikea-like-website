export const increment = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    }
}

// Header Bar
export const closeHeaderBar = () => {
    return {
        type: 'CLOSE_HEADER_BAR'
    }
}

// Navigation Bar
export const toggleMenu = () => {
    return {
        type: 'TOGGLE_NAVIGATION_BAR_MENU'
    }
}

export const toggleProductDropdown = () => {
    return {
        type: 'TOGGLE_NAVIGATION_BAR_PRODUCT_DROPDOWN'
    }
}

