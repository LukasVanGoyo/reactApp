import {useEffect, useState} from "react";
import FileUpload from "../components/FileUpload";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../features/images/imagesSlice";
import {addProduct} from "../features/products/productsSlice";
import '../styles/AddProductPage.scss'
import { Form } from 'react-bootstrap'
import {toast} from 'react-toastify'

const AddProductPage = () => {

    const { image } = useSelector((state) => state.images)
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()



    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        price: '',
        category:'',
        img: '',
        addedBy: user ? user._id : null
    })

    const {name, description, price, category, img } = newProduct

    const onChange =(e)=>{
        setNewProduct((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) =>{
        e.preventDefault();

        if(name === '' || description === '' || price === ''){
            toast.error('Wszystkie pola muszą być wypełnione!')
            return null
        }

        dispatch(addProduct(newProduct))
        dispatch(reset())
        console.log(newProduct)
    }

    useEffect(() => {
        if(image){
            setNewProduct((prevState) => ({
                ...prevState,
                img: image.id
            }))
        }else{
            setNewProduct((prevState) => ({
                ...prevState,
                img: null
            }))
        }

    },[image])
    return(
        <div className='add-product-page-wrapper'>
            <h1>Dodaj produkt</h1>

            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Nazwa produktu</Form.Label>
                    <Form.Control type="text" name='name' onChange={(e)=> onChange(e)} />
                </Form.Group>


                <Form.Group className="mb-3" >
                    <Form.Label>Opis produktu</Form.Label>
                        <br />
                        <textarea rows='5' name='description' onChange={(e)=> onChange(e)} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Cena</Form.Label>
                    <Form.Control type="number" name='price' onChange={(e)=> onChange(e)} />
                </Form.Group>

                <Form.Group className='mb-5'>
                    <Form.Label>Kategoria</Form.Label>
                    <Form.Select name='category' onChange={onChange} >
                        <option value="konfitury">Konfitury</option>
                        <option value="przetwory">Przetwory</option>
                        <option value="alkohole">Alkohole</option>
                        <option value="sprzęt">Sprzęt</option>
                    </Form.Select>
                </Form.Group>



                <FileUpload />
                <input type='submit' value='Dodaj produkt' className='btn btn-warning submit-btn' onClick={onSubmit}/>
            </Form>
        </div>
    )
}

export default AddProductPage;