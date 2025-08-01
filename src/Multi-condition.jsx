import { use, useState } from "react";
function Multicon(){
    const [count, setcount]= useState(1);
    return(
        <div>
            <h1>
                Hello Multi Condition Function
            </h1>
            <h1>{count}</h1>
            <button onClick={() => setcount(count + 1)}>Increment</button>
            {
                count==1?<h1>01 Increment</h1>:
                count==2?<h1>02 Increment</h1>:
                count==3?<h1>03 Increment</h1>:
                count==4?<h1>04 Increment</h1>:null
            }
        </div>
    )
}
export default Multicon;