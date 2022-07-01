import axios from "axios";

const URL = 'api/images/upload'
const upload = async(data) => {
    const response = await axios.post(URL, data)

    if(response.data){
        localStorage.setItem('image', JSON.stringify(response.data))
    }

    return response.data
}

const imagesService = {
    upload
}

export default imagesService;

