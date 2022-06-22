import { HiOutlineShoppingCart } from 'react-icons/hi'
import { FaHeart } from 'react-icons/fa'
import '../styles/ProductCard.scss'

import { useState } from 'react'
import {OverlayTrigger, Tooltip} from "react-bootstrap";

const ProductCard = ({name, image, prize, handleClick }) => {

    const[count, setCount] = useState(0)
    const handleIncrease = () => {
        setCount((count) => count +1)
    }
    const handleDecrease = () => {
        setCount((count) => count -1)

        if(count === 0){
            setCount(0)
        }
    }

    const handleChange = (value) => {
        const newVal = parseInt(value)

        setCount(newVal)
    }

    return(
        <div className="product-card-wrapper">

            <div className='product-card-image-container'>
                <img src={image} className="product-card-image" />
            </div>
            <div className="product-card-body">
                <div className='product-card-name'>
                    {name}
                </div>
                <div className='product-card-prize'>
                    <span className='old-prize'>12.20</span>
                    <span> {prize} zł </span>
                </div>
                <div className='product-card-counter'>

                    <div className='card-counter'>

                    <button onClick={handleDecrease}>-</button>
                    <input type='number' className='card-count' value={count}
                        onChange={(e)=> handleChange(e.target.value)}
                    />
                    <button onClick={handleIncrease}>+</button>
                    </div>

                </div>
                <div className='product-card-footer'>
                    <OverlayTrigger placement='top'
                                    overlay={<Tooltip>Dodaj do ulubionych</Tooltip>}>

                        <button className='product-card-heart-btn'><FaHeart /></button>
                    </OverlayTrigger>

                        <button onClick={handleClick} className='product-card-basket-btn'> <HiOutlineShoppingCart className='icon'/>  Do koszyka</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;