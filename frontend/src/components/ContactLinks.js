import {Nav} from "react-bootstrap";
import {FaPhoneAlt} from "react-icons/fa";
import {HiMail} from "react-icons/hi";
import '../styles/ContactLinks.scss'

const ContactLinks = () => {
    return(
        <Nav>
            <Nav.Link> <FaPhoneAlt className="phone-icon contact-icon" />732-850-464 </Nav.Link>
            <Nav.Link> <HiMail className="mail-icon contact-icon" /> contact@farmershop.pl </Nav.Link>
        </Nav>
    )
}

export default ContactLinks;