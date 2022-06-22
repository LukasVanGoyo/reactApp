import '../styles/Navbar.scss';
import logo from '../assets/images/logoczarne.png';
import {Button, Form, FormControl, InputGroup, Nav} from 'react-bootstrap';
import {FaSearch, FaUser, FaPhoneAlt} from "react-icons/fa";
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { HiMail } from 'react-icons/hi'
import {BiLogIn, BiLogOut} from 'react-icons/bi'
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from '../features/auth/authSlice'
import { useNavigate } from "react-router";
import Navigation from './Navigation'
import { IoIosArrowDown } from 'react-icons/io'
import {useEffect} from "react";
import {getTotals} from "../features/products/cartSlice";

import SearchForm from '../components/SearchForm'
const Navbar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user } = useSelector((state) => state.auth)
    const cart = useSelector((state) => state.cart)
    const { cartTotalQuantity, cartTotalAmount} = useSelector((state) => state.cart)
    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    useEffect(() =>{
        dispatch(getTotals())
    }, [cart])
    return(

        <div className="navbar-wrapper">

            <div className="logo-wrapper">
                <a href="/"><img src={logo} className="logo" alt=""/></a>
            </div>

            <div className="top-navbar-wrapper">
                <div className="info-links-wrapper">
                    <Nav>
                        <Nav.Link>Dostawa</Nav.Link>
                        <Nav.Link>Płatności</Nav.Link>
                        <Nav.Link>Reklamacje</Nav.Link>
                    </Nav>
                </div>

                <div className="contact-links-wrapper">
                    <Nav>
                        <Nav.Link> <FaPhoneAlt className="phone-icon contact-icon" />732-850-464 </Nav.Link>
                        <Nav.Link> <HiMail className="mail-icon contact-icon" /> contact@farmershop.pl </Nav.Link>
                    </Nav>
                </div>
            </div>


            <div className="auth-links-wrapper">
                <Nav>
                {
                    (user) ? <Nav.Link className="logout-btn" onClick={onLogout}><BiLogOut className="auth-icon"/> Wyloguj </Nav.Link> :

                            <>
                            <Nav.Link href='/login'>
                                <BiLogIn className="auth-icon"/>

                            </Nav.Link>
                            <Nav.Link href='/registration'><FaUser className="auth-icon" />


                            </Nav.Link>
                            </>
                }
                </Nav>
            </div>

            <div className="search-form-wrapper">
               <SearchForm />
            </div>

            <div className="shopping-cart-wrapper">
                <div className="shopping-cart-container">
                    <div className="shopping-cart-icon-box">
                        <a href='/koszyk' ><HiOutlineShoppingCart  className="shopping-cart-icon" /></a>
                        <span className="shopping-cart-span"> {cartTotalQuantity} </span>
                    </div>
                    <div className="shopping-cart-amount-box">

                        <p className="amount"> <span>Kwota</span> <br />{cartTotalAmount} </p>

                    </div>

                </div>
            </div>


            <div className="menu-wrapper">
                <Navigation />
            </div>
            <div className="mobile-menu-wrapper">
                <Nav className="justify-content-around">

                    <Nav.Link><Navigation /></Nav.Link>
                    {
                        (user) ? <Nav.Link><BiLogOut onClick={onLogout}/></Nav.Link> :  <Nav.Link href='/registration'><FaUser /></Nav.Link>
                    }

                    <Nav.Link><HiOutlineShoppingCart/></Nav.Link>

                </Nav>
            </div>

        </div>
    )
}

export default Navbar;

