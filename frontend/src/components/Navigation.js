import {Navbar, Nav, Container, Offcanvas} from 'react-bootstrap';
import { FiMenu }  from 'react-icons/fi'
import '../styles/Navigation.scss'
const Navigation = () => {

    const items = [
        {
            name: 'Sklep',
            link: '/',
        },
        {
            name: 'Artykuły',
            link: '/',
        },
        {
            name: 'Przepisy',
            link: '/',
        },
        {
            name: 'Wydarzenia',
            link: '/',
        },
        {
            name: 'Quiz',
            link: '/',
        },



    ]
    return (

        <Navbar expand="sm" >
            <Container >
                <Navbar.Toggle><FiMenu/></Navbar.Toggle>

                <Navbar.Offcanvas>
                    <Offcanvas.Header closeButton></Offcanvas.Header>
                    <Nav className="justify-content-evenly navigation">
                        {
                            items.map((item, index) => {
                                return(
                                    <Nav.Item key={index}>
                                        <Nav.Link  href={item.link}>
                                            { item.name }

                                        </Nav.Link>
                                    </Nav.Item>
                                )

                            })
                        }
                    </Nav>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>

    )
}

export default Navigation;