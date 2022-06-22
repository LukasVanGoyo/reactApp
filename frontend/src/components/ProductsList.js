import ProductCard from "./ProductCard";
import image from '../assets/products/pojemnik.jpg'
import image2 from '../assets/products/IMG_20220612_155051.jpg'
import image3 from '../assets/products/IMG_20220515_230303.jpg'
import image4 from '../assets/products/IMG_20220529_180521.jpg'

import '../styles/ProductsList.scss'

import { useDispatch } from "react-redux";
import { addToCart } from "../features/products/cartSlice";

const ProductsList = () => {

    const dispatch = useDispatch();

    const handleAdd = (product) => {
        dispatch(addToCart(product))
        console.log(product.name)
    }

    const products = [
        {
            id: 1,
            name: 'Pojemnik fermentacyjny',
            image: image,
            prize: 23.5
        },

        {
            id: 2,
            name: 'Rurka fermentacyjna ',
            image: image2,
            prize: 6.25
        },
        {
            id: 3,
            name: 'Kwiatki',
            image: image3,
            prize: 6.25
        },
        {
            id: 4,
            name: 'adsfadf',
            image: image4,
            prize: 300
        },
        {
            id: 5,
            name: 'OAfojfeiojei',
            image: image2,
            prize: 6.25
        },
        {
            id: 5,
            name: 'OAfojfeiojei',
            image: image2,
            prize: 6.25
        },
        {
            id: 5,
            name: 'OAfojfeiojei',
            image: image2,
            prize: 6.25
        },
        {
            id: 5,
            name: 'OAfojfeiojei',
            image: image2,
            prize: 6.25
        }
    ]



    return(
        <div className='products-list-wrapper'>


            {
                products.map((product, index) =>
                    <ProductCard key={index}
                                 name={product.name}
                                 image={product.image}
                                 prize={product.prize}
                                 handleClick={() => {handleAdd(product)}}
                    />
                )
            }
        </div>
    )
}

export default ProductsList;