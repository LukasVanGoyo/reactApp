import axios from "axios";

const URL = 'api/products/add'
const addProduct = async(data) => {
    const response = await axios.post(URL, data)

    return response.data
}

const getProducts = async() => {
    const response = await axios.get('api/products/all')

    return response.data
}
const productsService = {
    addProduct, getProducts
}

export default productsService;