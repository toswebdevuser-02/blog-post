import { use, useState } from "react";
function Multicon(){
    const [count, setcount]= useState(0);
    return(
        <div>
            {/* <h1>
                Hello Multi Condition Function
            </h1> */}
            <h1>{count}</h1>
            <button onClick={() => setcount(count + 1)}>Add</button>
            <button onClick={() => setcount(count - 1)}>Remove</button>

            {
                count=== 1?<h1>Count is One</h1>:
                count=== 2?<h1>Count is Two</h1>: 
                count=== 3?<h1>Count is Three</h1>: 
                count=== 4?<h1>Count is Four</h1>: 
                count=== 5?<h1>Count is Five</h1>: 
                count=== 6?<h1>Count is Six</h1>: 
                null
            }
        </div>
    )
}
export default Multicon;