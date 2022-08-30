import '../styles/Navbar.scss';
import { AiOutlineHeart, AiOutlineUser, AiOutlineShoppingCart} from 'react-icons/ai'
import logo from '../assets/images/logoczarne.png';
import SearchForm from '../components/SearchForm'
import Navigation from "./Navigation";
import {Nav, NavDropdown, Button} from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../features/auth/authSlice'
import LoginModal from "./LoginModal";
import {useEffect, useState} from "react";
import {getTotals} from "../features/products/cartSlice";

const Navbar = () =>{
    const dispatch = useDispatch();
    const handleLogout = () =>{
        dispatch(logout())
    }
    const { user } = useSelector((state) => state.auth)
    const cart = useSelector((state) => state.cart)
    const { cartTotalQuantity } = useSelector((state) => state.cart)

    const [showLoginModal, setShowLoginModal] = useState(false)
    const handleShowLoginModal = () => {
        setShowLoginModal(true)
    }
    const handleCloseLoginModal = () => {
        setShowLoginModal(false)
    }


    useEffect(()=>{
        dispatch(getTotals())
    }, [cart])

    return(
        <div className='navbar-wrapper'>
            <div className='logo-wrapper'>
                <img src={logo} width='130px' height='130px' alt=''/>
            </div>
            <div className='navbar-top'>
                <div className='search-wrapper'>
                    <SearchForm />
                </div>
                <div className='top-menu'>
                    <Nav className='top-menu-list'>
                        <Nav.Link>
                            <AiOutlineHeart size={25}/>
                            <span>Ulubione</span>
                        </Nav.Link>

                        {
                            !user ? <Button onClick={()=> handleShowLoginModal()}>
                                <AiOutlineUser size={25}/>
                                <span>Logowanie</span>
                            </Button>
                                :

                                <NavDropdown href='/profile' title='Moje konto'>

                                    <NavDropdown.Item>
                                        <Button onClick={handleLogout}>Wyloguj</Button>
                                    </NavDropdown.Item>

                                </NavDropdown>

                        }

                        <Nav.Link className='shopping-cart-link' href='/koszyk'>
                            <span className='shopping-cart-icon'>
                                <AiOutlineShoppingCart size={25} className='icon'/>
                                <span className='span-badge'>{cartTotalQuantity}</span>
                            </span>

                            Koszyk
                        </Nav.Link>
                    </Nav>
                </div>
            </div>
            <div className='navbar-menu'>

               <Navigation />
            </div>
                <LoginModal show={showLoginModal} handleClose={handleCloseLoginModal} />
            </div>



    )
}


export default Navbar;

