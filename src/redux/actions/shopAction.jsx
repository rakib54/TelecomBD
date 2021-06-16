export const AddToCart = (payload) => {
    return {
        type: "ADD_TO_CART",
        payload
    }
}

export const removeFromCart = (payload) => {
    return {
        type: "REMOVE_FROM_CART",
        payload
    }
}