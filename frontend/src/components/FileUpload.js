import {useEffect, useState} from "react";
import { Spinner } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import { upload, reset } from "../features/images/imagesSlice"

const FileUpload = () => {

    const [file, setFile] = useState('')
    const dispatch = useDispatch()
    const { image, isLoading } = useSelector((state) => state.images)

    const handleChange = (e) => {
        setFile(e.target.files[0])
    }

    const submit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("file", file)
        dispatch(upload(formData))

    }
    return(
       <div>
           <form>
               <input type='file' onChange={handleChange} />
               <button type='button' className='btn btn-success' onClick={submit}>Upload</button>
           </form>
           { image ? <img src={`data:image/jpeg;base64,${image.file}`} height="200px" width="200px" /> : <p>Nie ma zdjęcia</p> }
           { isLoading ? <Spinner animation="border"/> : null }
           <div>

           </div>
       </div>
    )
}

export default FileUpload;