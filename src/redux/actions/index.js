export const increment = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
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

