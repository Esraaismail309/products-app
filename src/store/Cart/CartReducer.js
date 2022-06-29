import { ADD_TO_CART, DECREASE_COUNT, INCREASE_COUNT, REMOVE_FROM_CART } from "./CartTypes";

const initialValues = {
    products: [],
    cartQuantity: 0
}

export const cartReducer = (state = initialValues, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const productFound = state.products.filter(
                (elem) => elem.id === action.payload.id
            );
            if (productFound.length > 0) {
                return {
                    ...state,
                    products: state.products.map((item) => {
                        if (item.id === action.payload.id) {
                            return {
                                ...item,
                                quantity: item.quantity + 1,
                            };
                        } else {
                            return item;
                        }
                    }),
                    cartQuantity: state.cartQuantity + 1,

                };

            } else {
                const newProduct = { ...action.payload, quantity: 1 }
                return {
                    ...state,
                    products: [...state.products, newProduct],
                    cartQuantity: state.cartQuantity + 1
                }
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                products: [...state.products.filter((product) => action.product.id !== product.id
                )],
                cartQuantity: state.cartQuantity - action.product.quantity
            }
        case INCREASE_COUNT:
            return {
                ...state,
                products: state.products.map((product) => {
                    if (product.id === action.product.id) {
                        return {
                            ...product,
                            quantity: product.quantity + 1,
                        };
                    } else {
                        return product;
                    }
                }),
                // updating the cart quantity also by 1 to be updated in navbar.
                cartQuantity: state.cartQuantity + 1,
            };
        case DECREASE_COUNT:
            return {
                ...state,
                products: state.products.map((product) => {
                    if (product.id === action.product.id) {
                        return {
                            ...product,
                            quantity: product.quantity > 1 ? product.quantity - 1 : 1,
                        };
                    } else {
                        return product;
                    }
                }),
                cartQuantity: state.cartQuantity > 1 ? state.cartQuantity - 1 : 1,
            };


        default:
            return state;
    }

}