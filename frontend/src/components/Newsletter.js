import '../styles/Newsletter.scss';
import { Form, Button, InputGroup} from 'react-bootstrap'
import { HiOutlineMail } from 'react-icons/hi'
const Newsletter = () => {
    return(
        <div className='newsletter-wrapper'>
            <div className='newsletter-logo-box'>
                <HiOutlineMail  />
            </div>
            <div className='newsletter-title'>
                <h4>Bądź na bieżąco</h4>
                <h1>Newsletter</h1>
                <h5>Zapisz się i zgarnij kupon -5% na zakupy</h5>
                <p>Otrzymuj jako pierwszy oferty specjalne oraz informacje o promocjach.</p>
            </div>
            <div className='newsletter-input-box'>
                <Form>
                    <Form.Group>
                        <Form.Label>Zapisz się do Newslettera</Form.Label>
                        <InputGroup>
                            <Form.Control type='email'/>
                            <Button type='submit'>Zapisz się</Button>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mt-1" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Treść zgody (wymagana)" />
                    </Form.Group>
                    <span>Nie lubimy checkboxów i spamu. Lubimy natomiast wysyłać naprawdę dobre oferty.
                        Zaznacz powyższe zgody, jeśli chcesz dostawać wyjątkowe treści o naszych promocjach czy nowościach.
                        Pamiętaj, że zawsze możesz cofnąć swoją zgodę.</span>
                </Form>
            </div>
        </div>
    )
}

export default Newsletter;