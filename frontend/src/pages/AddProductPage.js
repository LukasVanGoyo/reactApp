import {useEffect, useState} from "react";
import FileUpload from "../components/FileUpload";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../features/images/imagesSlice";
import {addProduct} from "../features/products/productsSlice";
const AddProductPage = () => {
    const { image } = useSelector((state) => state.images)
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const [newProduct, setNewProduct] = useState({
        name:'',
        description:'',
        price: '',
        category: '',
        img: '',
        user: user._id
    })

    const {name, description, price, category, img} = newProduct

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
        <>
            <h2>Dodaj produkt</h2>
            <form>
                <label>Nazwa</label>
                <input
                    type='text'
                    value={name}
                    name="name"
                    onChange={onChange}

                />

                <label>Opis</label>
                <input
                    type='text'
                    value={description}
                    name="description"
                    onChange={onChange}

                />

                <label>Cena</label>
                <input
                    type='number'
                    value={price}
                    name="price"
                    onChange={onChange}

                />
                { newProduct.img }
               <FileUpload />

                <input type='submit' value='Dodaj przepis' onClick={onSubmit}/>
            </form>
        </>
    )
}

export default AddProductPage;