import {useEffect, useState} from "react";
import axios from 'axios'

const Display = () =>{
    const[image, setImage] = useState('')
    useEffect(() =>{
        const id = '62b1b32c0ad4a5d6c81baa0c'

        try{
            axios.get(`/api/images/getimage/${id}`).then((res) => {
                setImage(res.data.message)
                console.log(res)
            })
        }
        catch (e){
            if(e){
                console.log(e)
            }
        }
    })
    return(
        <>
            {
                image ? <img src={`data:image/jpeg;base64,${image}`} width="240px" height="240px"/> : <p>Nie ma niczrgo</p>
            }
        </>
    )
}

const FileUpload = () => {
    const style = {
        width: '200px',
        height: '200px'
    }

    const [file, setFile] = useState('')
    const [fileName, setFileName] = useState()
    const[uploadedFile, setUploadedFile] = useState({})
    const [image, setImage] = useState('')

    const handleChange = (e) => {
        setFile(e.target.files[0])
        setFileName((e.target.files[0].name))
    }

    const upload = async (e) => {
        e.preventDefault()
        console.log(file)
        const formData = new FormData();
        formData.append("file", file)

        try{
            await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then( (res) => {
                console.log(res.data.data)


            })


        }
        catch (err){
            console.log(err.res.data.msg)
        }
    }
    return(
       <div>
           <form>
               <input type='file' onChange={handleChange} />
               <button type='button' className='btn btn-success' onClick={upload}>Upload</button>
           </form>
<Display />
           <div>

           </div>
       </div>
    )
}

export default FileUpload;