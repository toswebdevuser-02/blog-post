import { use, useState } from "react";
function Test01(){
    const [count, setcount] = useState(0);
    return(
        <div>
            <h1>Test 01 Is HElllo To React Devloper</h1>
            <h1>{count}</h1>
            <button onClick={() => (setcount(count + 1))}>Increment</button>
            <button onClick={() => (setcount(count - 1))}>Decrement</button>
        </div>
    )
}

export default Test01;