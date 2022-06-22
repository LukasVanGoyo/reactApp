import axios from 'axios'

const API_URL = '/api/user/register'
const Login_URL = '/api/user/login'

const register = async(userData) => {
    const response = await axios.post(API_URL, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const login = async(userData) => {
    const response = await axios.post(Login_URL, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}


const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register, logout, login
}
export default authService;