import {useSelector, useDispatch} from "react-redux";
import { logout } from '../features/auth/authSlice'
const AuthLinks =()=>{
    const dispatch = useDispatch()
    const{user} = useSelector((state)=> state.auth)
    const handleLogout = () =>{
        dispatch(logout())
    }
    return(
        <>
            {
                user ? <button onClick={handleLogout}>Wyloguj się </button> :
                    <>
                        <a href='/login' >Zaloguj się</a>
                        <a href='/registration' >Zarejestruj się</a>
                    </>

            }

        </>
    )
}

export default AuthLinks;