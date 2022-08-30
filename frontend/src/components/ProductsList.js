import ProductCard from "./ProductCard";

import '../styles/ProductsList.scss'
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/products/cartSlice";
import { getProducts } from '../features/products/productsSlice'

const ProductsList = () => {

    const dispatch = useDispatch();

    const { products } = useSelector((state)=> state.products)

    const handleAdd = (item) => {
        dispatch(addToCart(item))

    }

    useEffect(() => {
        dispatch(getProducts())
        console.log(products)
    },[])

    return(
        <div className='products-list-wrapper'>

            {
                products.map((product, index) => <ProductCard name={product.name}
                                                              image={product.img}
                                                              price={product.price}
                                                              key={index}
                                                              id={product._id}
                                                              handleClick={()=> {handleAdd(product)}}
                    />
                )
            }

        </div>
    )
}

export default ProductsList;