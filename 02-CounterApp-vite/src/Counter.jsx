import { useState } from "react";


const Counter = () => {

    const [ counter, setCounter ] = useState(1);

    return (
        <>
            <h1>{ counter }</h1>

            <button onClick={() => setCounter(counter + 1)}>+1</button>
            <button onClick={() => setCounter(counter - 1 )}>-1</button>
            <button onClick={() => setCounter(1)}>Reset</button>
        </>
    )
}

export default Counter 