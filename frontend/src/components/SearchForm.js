import {Button, Form, FormControl, InputGroup} from "react-bootstrap";
import {FaSearch} from "react-icons/fa";
import '../styles/SearchForm.scss'
const SearchForm =() => {
    return(

            <Form className="search-form">
                <InputGroup >
                    <FormControl className="search-form-input"
                                 placeholder="Szukaj"
                                 aria-label="Szukaj"
                                 aria-describedby="basic-addon2"
                    />
                    <Button className="search-form-btn">
                        <span className="search-btn-span">
                            <FaSearch />
                        </span>

                    </Button>
                </InputGroup>
            </Form>

    )
}

export default SearchForm;