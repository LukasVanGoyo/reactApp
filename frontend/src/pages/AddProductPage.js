import {useEffect, useState} from "react";
import FileUpload from "../components/FileUpload";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../features/images/imagesSlice";
import {addProduct} from "../features/products/productsSlice";
import FormInput from "../components/FormInput";
import '../styles/AddProductPage.scss'
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
        addedBy: user._id
    })

    const {name, description, price, category, img, addedBy } = newProduct

    const onChange =(e)=>{
        setNewProduct((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) =>{
        e.preventDefault();
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
                img: 'nie ma id'
            }))
        }

    },[image])
    return(
        <div className='add-product-page-wrapper'>
            <h1>Dodaj produkt</h1>

            <form>
                <FormInput
                    label='Nazwa'
                    type='text'
                    name='name'
                    value={name}
                    onChange={onChange}
                />

                <textarea
                    name='description'
                    value={description}
                    onChange={onChange}
                    placeholder='Dodaj opis produktu'
                    className='add-product-textarea'
                />
                <FormInput
                    label='Cena'
                    name='price'
                    value={price}
                    onChange={onChange}
                    type='number'
                />


                <select name="category" onChange={onChange} >
                    <option value="konfitury">Konfitury</option>
                    <option value="przetwory">Przetwory</option>
                    <option value="alkohole">Alkohole</option>
                    <option value="sprzęt">Sprzęt</option>
                </select>

                {category}
                <FileUpload />
                <input type='submit' value='Dodaj produkt' onClick={onSubmit}/>
            </form>
        </div>
    )
}

export default AddProductPage;