import { useState } from "react"
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(["Hola", "Cristel"]);

    return (
        <>
            <h1>GiftExpertApp</h1>
            {/* Input */}

            <AddCategory setCategories={ setCategories }/>

            {/* Listado */}
            { /* Agregar categoria */}
            <ul>
                {
                    categories.map(cat => {
                        return <li key={cat}>{cat}</li>
                    })
                }
            </ul>
        </>
    )
}