import { ADD_TO_CART, DECREASE_COUNT, INCREASE_COUNT, REMOVE_FROM_CART } from "./CartTypes"

export const addToCartAction = (payload) => {
    return {
        type: ADD_TO_CART,
        payload
    }
}
export const removeCartAction = (product) => {
    return {
        type: REMOVE_FROM_CART,
        product
    }
}

export const increaseCart = (product) => {
    return {
        type: INCREASE_COUNT,
        product
    }
}
export const decreaseCart = (product) => {
    return {
        type: DECREASE_COUNT,
        product
    }
}

