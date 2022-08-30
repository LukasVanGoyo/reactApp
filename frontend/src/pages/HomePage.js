import { Container, Row, Col } from 'react-bootstrap'
import ProductsList from "../components/ProductsList";


import { useSelector } from "react-redux";
import {authSlice} from "../features/auth/authSlice";
import AddProductPage from "./AddProductPage";
import Suggested from "../components/SuggestedArticles"
import ProductCard from "../components/ProductCard";
import Headline from "../components/Headline";
import ShopInfo from "../components/ShopInfo";
import Newsletter from "../components/Newsletter";
import Footer from '../components/Footer'
import Slider from '../components/Slider/Slider'
const HomePage =()=>{

    const style = {
        display: "flex",
        justifyContent: 'center',
        paddingBottom: "30px"
    }
    return(
        <>
            <Slider />

            <br />
        <Headline text='Sprawdź produkty w naszym sklepie' />

            <div style={style}>
                <ProductsList />
            </div>
        <ShopInfo />
            <Newsletter />
            <Footer />


        </>
    )

}

export default HomePage;