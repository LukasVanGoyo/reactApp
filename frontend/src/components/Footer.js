import '../styles/Footer.scss'
import { FaPhoneAlt, FaFacebookSquare, FaInstagramSquare, FaYoutube} from 'react-icons/fa'
import logo from '../assets/images/logobiale.png'


const Footer = () =>{
    return(
        <div className='footer-wrapper'>
            <div className='footer-table row'>
                <div className='col-sm-4'>
                    <h4>Farmershop</h4>
                        <ul>

                            <li><a href='/'>O nas</a></li>
                            <li><a href='/'>Kontakt</a></li>
                            <li><a href='/'>Blog</a></li>
                            <li><a href='/'>Polityka prywatności</a></li>
                            <li><a href='/'>Regulamin</a></li>
                        </ul>
                </div>

                <div className='col-sm-4 '>
                    <h4>Obsługa Klienta</h4>
                    <ul>
                        <li><a href='/'>Sposoby płatności</a></li>
                        <li><a href='/'>Koszty i czas dostawy</a></li>
                        <li><a href='/'>Reklamacje i zwroty</a></li>
                        <li><a href='/'>Moje konto</a></li>

                    </ul>
                </div>

                <div className='col-sm-4'>
                    <h4>Nasza oferta</h4>
                    <ul>
                        <li><a href='/'>Konfitury</a></li>
                        <li><a href='/'>Octy</a></li>
                        <li><a href='/'>Mieszanki ziołowe</a></li>
                        <li><a href='/'>Poradniki</a></li>
                        <li><a href='/'>Promocje</a></li>
                        <li><a href='/'>Nowości</a></li>
                    </ul>
                </div>
            </div>

            <div className='footer-contact'>
                <div className='footer-contact-box'>
                    <h4>Kontakt</h4>
                        <div className='footer-phone'>

                            <FaPhoneAlt className='icon'/>
                            <div>
                                <p className='phone-title'>Skontaktuj się z nami</p>
                                <a href='tel:+48732850464' className='phone-title'>732-850-464</a>
                            </div>

                        </div>

                    <div className='footer-socials'>
                        <h4>Znajdź nas na:</h4>
                        <div className='footer-socials-icons'>
                           <a href='/'><FaFacebookSquare className='social-icon' color='pink'/></a>
                           <a href='/'><FaInstagramSquare className='social-icon' color='pink'/></a>
                            <a href='/'><FaYoutube className='social-icon' color='pink'/></a>
                        </div>
                    </div>
                </div>
                <div className='footer-logo'>

                    <img src={logo} className='footer-logo' alt="logo" height='100px' width='100px'/>
                </div>
            </div>
        </div>
    )
}

export default Footer;

