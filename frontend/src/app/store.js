import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/authSlice'
import cartReducer, { getTotals } from '../features/products/cartSlice'
import imagesReducer from "../features/images/imagesSlice";
import productsReducer from "../features/products/productsSlice"
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    cart: cartReducer,
    images: imagesReducer,
    products: productsReducer,
  },
});

store.dispatch(getTotals())


