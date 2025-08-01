import { useState } from "react";
function Hideshow(){
    const [display, setdisplay] = useState(true)
    return(
        <div>
        {/* {
        display? <h1>Hello from Hideshoe</h1>:null
            
        } */}
        <button onClick={() => setdisplay(!display)}>Toggle</button>
        {
            display? <h1>Hello Hide And show</h1>:null
        }
       
            

        </div>
    )
}
export default Hideshow;