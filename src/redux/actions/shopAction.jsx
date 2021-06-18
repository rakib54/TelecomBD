
export const loadProducts = () => {
    return (dispatch, getState) => {
        fetch(`https://mocki.io/v1/a09219c5-54c0-436c-9e3f-809892da69f2`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: "LOAD_PRODUCTS",
                    payload: data
                })
            })
    }
}

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