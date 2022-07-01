import axios from "axios";

const URL = 'api/products/add'
const addProduct = async(data) => {
    const response = await axios.post(URL, data)

    return response.data
}

const productsService = {
    addProduct
}

export default productsService;