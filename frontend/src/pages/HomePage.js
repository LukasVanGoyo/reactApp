import { Container, Row, Col } from 'react-bootstrap'
import ProductsList from "../components/ProductsList";
import AddProductIcon from "../components/AddProductIcon";
import FileUpload from '../components/FileUpload'

import { useSelector } from "react-redux";
import {authSlice} from "../features/auth/authSlice";

const HomePage = () => {

    const { user } = useSelector((state) => state.auth)


    return(
        <>

            <Container fluid className="home-page-wrapper pt-5">

                <h2>Sprawdź nasze produkty</h2>

                <ProductsList />
                <FileUpload />

                {
                    user ? <AddProductIcon /> : null
                }

            </Container>
        </>
    )
}

export default HomePage ;