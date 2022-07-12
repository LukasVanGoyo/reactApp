import {FormControl, FormGroup, FormLabel} from "react-bootstrap";

const FormInput = ({label, type, placeholder, name, value, onChange}) => {
    return(
        <>
            <FormGroup>
                <FormLabel>
                    {label}
                </FormLabel>
                <FormControl
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange} />

            </FormGroup>
        </>
    )
}

export default FormInput;

