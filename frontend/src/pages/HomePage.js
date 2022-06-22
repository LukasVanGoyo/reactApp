import { Container, Row, Col } from 'react-bootstrap'
import ProductsList from "../components/ProductsList";

import FileUpload from '../components/FileUpload'
const HomePage = () => {
    return(
        <>

            <Container fluid className="home-page-wrapper pt-5">

                <h2>Sprawdź nasze produkty</h2>

                <ProductsList />
                <FileUpload />

            </Container>
        </>
    )
}

export default HomePage ;