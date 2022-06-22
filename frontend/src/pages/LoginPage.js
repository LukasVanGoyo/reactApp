import { Form, Button } from 'react-bootstrap'
import '../styles/LoginPage.scss'
import { useState, useEffect} from 'react'
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {login, reset} from "../features/auth/authSlice"
import {toast} from "react-toastify";


const LoginPage = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

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

        if( email === '' && password === ''){
            toast.error('Wszystkie pola muszą być wypełnione')
        } else {
            const userData = {
                 email, password
            }

            dispatch(login(userData))
        }
    }

    useEffect(() => {
        if(isError){
            toast.error(message)
        }
        if(isSuccess || user) {
            navigate('/')
            toast.success(`Zostałeś zalogowany jako ${user.name}`, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                theme: "colored"
            })


        }

        dispatch(reset())
    },[user, isError, isSuccess, message, navigate, dispatch])


    return(
            <div className="login-page-wrapper">
                <h3 className="headline">Zaloguj się</h3>
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

                <div className="login-page-footer">
                    <a href="/registration"><small>Załóż konto</small></a>
                </div>
            </div>
    )
}

export default LoginPage;