import { Form, Button, Modal} from 'react-bootstrap'
import '../styles/LoginModal.scss'
import { useState, useEffect} from 'react'
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {login, reset} from "../features/auth/authSlice"
import {toast} from "react-toastify";

import RegistrationModal from "./RegistrationModal";

const LoginModal = ({show, handleClose}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const[showRegistrationModal, setShowRegistrationModal] = useState(false)

    const handleShowRegistrationModal = () => {
        handleClose()
        setShowRegistrationModal(true)
    }

    const handleCloseRegistrationModal = () => {
        setShowRegistrationModal(false)
    }
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )
    const onChange = (e) =>{
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if( email === '' && password === ''){
            toast.error('Wszystkie pola muszą być wypełnione')
        } else {
            const userData = {
                email, password
            }

            dispatch(login(userData))
            handleClose()
        }
    }

    useEffect(() => {
        if(isError){
            toast.error(message)
        }
        if(isSuccess || user) {
            navigate('/')

        }

        dispatch(reset())
    },[user, isError, isSuccess, message, navigate, dispatch])


    return(
        <>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton >
                <Modal.Title>Zaloguj się</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="login-form-wrapper">
                    <Form.Group className="mb-3 mt-3" >
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email"
                                      name="email"
                                      value={email}
                                      placeholder="Podaj email"
                                      onChange={onChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Hasło</Form.Label>
                        <Form.Control type="password"
                                      name="password"
                                      value={password}
                                      placeholder="Hasło"
                                      onChange={onChange}
                        />
                    </Form.Group>
                    <Button className="login-btn" type="submit" onClick={onSubmit}>
                        Zaloguj
                    </Button>

                </Form>

            </Modal.Body>
            <Modal.Footer>
                <p>Nie masz jeszcze konta?</p>
                <Button variant='warning' onClick={handleShowRegistrationModal}>Załóż konto</Button>
            </Modal.Footer>


        </Modal>
            <RegistrationModal show={showRegistrationModal} handleCloseModal={handleCloseRegistrationModal}/>
        </>

    )
}

export default LoginModal;

