import { useState } from "react"
import PropTypes from "prop-types";


const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = ({ target }) => {

        setInputValue( target.value ) 

    };

    const handleSubmit = ( e ) => {

        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategories( items => [ e.target.name.value, ...items ] );
            setInputValue("")
        };

        
    };

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
                id="name"
            /> 
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

export default AddCategory
