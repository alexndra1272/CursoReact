import { useState } from "react";

export const AddCategory = ({ setCategories }) => {

    const [ inputCat, setInputCat ] = useState('');

    const formOnSubmit = (e) => {

        e.preventDefault();

        // Validar que no sea algo vacio
        if (inputCat.trim().length <= 1) return;

        setCategories(categories => [ inputCat, ...categories ])

        setInputCat('')
    }

    return (
        <form onSubmit={(e) => { formOnSubmit(e) }}>
            <input
                placeholder="Ingrese una categoria"
                value={ inputCat }
                onChange={ ({ target }) => setInputCat(target.value)}
            />
        </form>
    )
}