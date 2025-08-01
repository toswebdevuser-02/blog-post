import { useState } from "react";

const Dev = () => {
    const [count, setCount] = useState(0)
    return(
        <>
            <h1>Counter:{count}</h1>
            <button onClick={() => setCount (count + 1)}>Add Number</button>
            <button onClick={() => setCount (count - 1)}>Remove Number</button>
        </>
    )
}

export default Dev;