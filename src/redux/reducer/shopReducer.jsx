// import data from "../../components/FakeData/ShopData"

const initialState = {
    allProducts:[],
    addProduct: [],
    removeProduct: []
}

const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case "LOAD_PRODUCTS": {
            const newState = { 
                ...state,
                allProducts: action.payload
            }
            return newState
        }
        case "ADD_TO_CART": {
            const newState = {
                ...state,
                addProduct: [...state.addProduct, action.payload]
            }
            return newState
        }
        case "REMOVE_FROM_CART": {
            const newState = {
                ...state,
                removeProduct: state.addProduct.filter((p) => p.id !== action.payload)
            }
            return newState
        }
        default: {
            return state
        }
    }
}
export default productReducer;