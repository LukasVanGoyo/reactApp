import {Button, Form} from "react-bootstrap";
import {useEffect, useState} from 'react'
import '../styles/RegistrationPage.scss'
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router"
import { register, reset } from "../features/auth/authSlice"

import { toast } from 'react-toastify'

const RegistrationPage = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

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

        if(name === '' && email === '' && password === ''){
            toast.error('Wszystkie pola muszą być wypełnione')
        } else {
            const userData = {
                name, email, password
            }

            dispatch(register(userData))
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
            <div className="registration-page-wrapper">
            <h4 className='headline'>Załóż konto</h4>
            <Form className="registration-form-wrapper">
                <Form.Group className="mb-3 mt-3" >
                    <Form.Label>Twój login </Form.Label>
                    <Form.Control type="text"
                                  placeholder="Podaj login"
                                  name="name"
                                  value={name}
                                  onChange={onChange} />
                </Form.Group>

                <Form.Group className="mb-3 " >
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email"
                                  name="email"
                                  value={email}
                                  placeholder="Podaj email"
                                  onChange={onChange}/>
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Hasło</Form.Label>
                    <Form.Control type="password"
                                  name="password"
                                  value={password}
                                  placeholder="Hasło"
                                  onChange={onChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={onSubmit}>
                    Zarejestruj
                </Button>
            </Form>

                <div className="registration-page-footer">
                    <a href="/login"><small>Zaloguj się </small></a>
                </div>
            </div>
    )
}

export default RegistrationPage;