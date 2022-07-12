import { useEffect } from "react";
import {HiOutlineShoppingCart} from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";

import {getTotals} from "../features/products/cartSlice";


import '../styles/ShoppingCartIcon.scss';
const ShoppingCartIcon = () => {

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const { cartTotalQuantity, cartTotalAmount} = useSelector((state) => state.cart)

    useEffect(()=>{
        dispatch(getTotals())
    }, [cart])

    return(
      <>
      </>
    )
}

export default ShoppingCartIcon;