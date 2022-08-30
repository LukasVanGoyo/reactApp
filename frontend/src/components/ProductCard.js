import { HiOutlineShoppingCart } from 'react-icons/hi'
import { AiFillHeart } from 'react-icons/ai'
import '../styles/ProductCard.scss'
import Image from '../components/Image'
import { useState } from 'react'
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import image1 from "../assets/images/domowa-nalewka.jpg";
const ProductCard = ({name, image, price, handleClick, id }) => {


    return(
        <div className="product-card-wrapper" id={id}>
            <div className='card-media'>
                <Image data={image} />
                <span className='discount-badge'>-20%</span>
                <span className='new-badge'>Nowość</span>
            </div>
            <div className='card-body'>
                <h1 className='card-title'>{name}</h1>
                <span className='card-old-price'>30.45</span>
                <span className='card-price'>{price}</span>
            </div>
            <div className='card-bottom'>
                <AiFillHeart size={35} className='heart-icon'/>
                <HiOutlineShoppingCart size={35} className='cart-icon' onClick={handleClick }/>
            </div>

        </div>
    )
}

export default ProductCard;