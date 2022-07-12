import ProductCard from "./ProductCard";

import '../styles/ProductsList.scss'
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/products/cartSlice";


const ProductsList = () => {

    const dispatch = useDispatch();



    const handleAdd = (product) => {
        dispatch(addToCart(product))
        console.log(product.name)
    }





    return(
        <div className='products-list-wrapper'>



        </div>
    )
}

export default ProductsList;