import {Navbar, Nav, Container, Offcanvas} from 'react-bootstrap';
import { FiMenu }  from 'react-icons/fi'
import '../styles/Navigation.scss'
const Navigation = () => {

    const items = [
        {
            name: 'Strona Główna',
            link: '/',
            hasSubMenu: 'false'
        },
        {
            name: 'Aktualności',
            link: '/news',
            hasSubMenu: 'false'
        },
        {
            name: 'O nas',
            link: '/about',
            hasSubMenu: 'false'
        },
        {
            name: 'Promocje',
            link: '/promotion',
            hasSubMenu: 'false'
        },
        {
            name: 'Quiz',
            link: '/quiz',
            hasSubMenu: 'false'
        }

    ]
    return (

        <Navbar expand="lg" >
            <Container >
                <Navbar.Toggle><FiMenu/></Navbar.Toggle>

                <Navbar.Offcanvas>
                    <Offcanvas.Header closeButton></Offcanvas.Header>
                    <Nav className="justify-content-around navigation">
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