import '../styles/CartPage.scss'

import { useSelector, useDispatch } from "react-redux";
import {useEffect} from "react";

import { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } from '../features/products/cartSlice'

const CartPage = () => {

    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch();

    const handleRemove = (cartItem) => {
        dispatch(removeFromCart(cartItem))
    }

    const handleDecrease = (cartItem) =>{
        dispatch(decreaseCart(cartItem))
    }

    const handleIncrease = (cartItem) =>{
        dispatch(addToCart(cartItem))
    }

    const handleClear = () =>{
        dispatch(clearCart())
    }

    useEffect(() =>{
        dispatch(getTotals());
    }, [cart])
   return(

               <div className='cart-wrapper'>
                   <h2>Twój koszyk</h2>

                   <div className='cart-titles'>
                       <h3 className='cart-titles-product'>Produkt</h3>
                       <h3 className='cart-titles-price'>Cena</h3>
                       <h3 className='cart-titles-quantity'>Ilość</h3>
                       <h3 className='cart-titles-total'>Razem</h3>
                   </div>
                   <div className='cart-items-container'>
                       {
                           cart.cartItems?.map((cartItem) => (
                               <div className='cart-item'>

                                   <div className='cart-item-product'>
                                       <img src={cartItem.image} className='cart-item-image' alt='' />
                                       <div>
                                           <div className='cart-item-name'> {cartItem.name}</div>
                                           <button className='btn btn-warning' onClick={() =>{handleRemove(cartItem)}}>Usuń</button>
                                       </div>
                                   </div>

                                   <div className='cart-item-price'>{cartItem.prize} zł</div>
                                   <div className='cart-item-quantity'>
                                       <button onClick={() =>{handleDecrease(cartItem)}}>-</button>
                                       <div className='cart-count'>{cartItem.cartQuantity}</div>
                                       <button onClick={() =>{handleIncrease(cartItem)}}>+</button>
                                   </div>
                                   <div className='cart-item-total'>{ cartItem.prize * cartItem.cartQuantity } zł</div>
                               </div>
                           ))
                       }
                   </div>

                   <div className='cart-summary'>
                       <button className='clear-cart-btn btn btn-danger' onClick={()=>{handleClear()}}>Usuń wszystko</button>
                       <div className='cart-summary-total'>
                           <div className='total'>Suma: <span>{ cart.cartTotalAmount }</span></div>
                           <button className='btn btn-success'>Zapłać</button>
                       </div>
                   </div>

               </div>


   )

}

export default CartPage;