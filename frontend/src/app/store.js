import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/authSlice'
import cartReducer, { getTotals } from '../features/products/cartSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});

store.dispatch(getTotals())


