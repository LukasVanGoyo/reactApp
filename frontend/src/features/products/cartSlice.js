import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,

}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity +=1
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1};
                state.cartItems.push(tempProduct)
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        removeFromCart(state, action){
            state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        decreaseCart(state, action){
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -=1;
            } else if(state.cartItems[itemIndex].cartQuantity === 1){
                state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        clearCart(state, action){
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        getTotals(state, action){

            let { total, quantity } = state.cartItems.reduce((cartTotal, cartItems ) => {
                const {price, cartQuantity } = cartItems;
                const itemTotal = (price * cartQuantity)

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity

                return cartTotal;
            },
            {
                total: 0,
                quantity: 0
            }
            );

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        }
    }
})

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } = cartSlice.actions

export default cartSlice.reducer;