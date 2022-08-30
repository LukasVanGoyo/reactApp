import axios from 'axios'
import {useEffect, useState} from "react";

const Image = ({data}) => {
    const [img, setImg] = useState()

    const getImage = async () => {
        try{
           await axios.get('/api/images/getimage/' + data)
               .then(res => {
                setImg(res.data)

            })
        }catch (e){
            console.log(e)
        }
    }
    useEffect(()=>{
        getImage()
    },[img])


    return(
        <>
            {
                img ? <img src={`data:image/jpeg;base64,${img}`} height="100%" width="100%" alt="" /> : <p>nie ma zdjęcia</p>
            }

        </>
        )

}

export default Image;