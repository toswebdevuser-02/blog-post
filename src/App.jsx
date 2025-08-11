import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dev from './Counter.jsx' 
import Test01 from './Test-01.jsx'
import Hideshow from './Hideshow.jsx'
import Multicon from './Multi-condition.jsx'
import Prompt from './Prompt.jsx'


function App() {
  const [count, setCount] = useState(0)

  const name = "aashutosh"
  const x=10
  const y=50
  const age = ""
  function sum(a,b){
    return a + b
  }
  function operation(a,b,opp){
      if(opp =="+"){
        return a + b
      }
      else if(opp =="-"){
        return a - b
      }
      else{
        return a*b
      }
  }
  const object={
    name: "Aashutosh",
    age: 25,
    city: "Delhi"
  }
  const userarray=["Dharmik" , "Aashutosh", "Sahil", "Anshul", "Rishabh"]
  const userimg = "https://www.teslaoutsourcingservices.com/images/battersea-power-station.webp"
  function callfun(fruitname){
    alert (fruitname)
  }
  
  // Stat Value Change
  const [cfruit,setfruit]=useState("Apple")
  const handlefruit=()=>{
    setfruit("Banana")
  }
const [display, setdisplay] = useState(false)


// let name1 = "Dharmik"
// let age1 = 25
// let gender1 = "Male"

let userlist ={
  name : "Dipen",
age : 25,
 gender : "Male",
}

let userlist2 ={
  name : "Aashutosh",
  age : 30,
  gender : "Male",
}

let userlist3 ={
  name : "Dharmik",
  age : 25,
  gender : "Male",
}
let collegename = ["IIT" , "DU" , "NIT" , "MIT"]
      const  [student , setstudent]= useState()

  return (
    <>
      <h1>
        Hello Blog
      </h1>
      <h1>{name}</h1>
      <h1>{x + y}</h1>
      <h1>{age?age:"No Age Provided"}</h1>
      <h1>{sum(25,75)}</h1>
      <h1>{operation(25,78,"+")}</h1>
      <h1>{operation(25,78,"-")}</h1>
      <h1>{operation(15,99)}</h1>
      <h1>{object.city}</h1>
      <h1>{userarray[1]}</h1>
      <input type="text" value={name} />
      <img src={userimg} alt="" />

      <button onClick={()=>callfun("Apple")} >Apple</button>
      <button onClick={()=>callfun("Banana")} >Bananaa</button>
      <h1>{cfruit}</h1>
      <button onClick={handlefruit} >Change Fruit</button>
      <Dev />
      <Test01 />
      <Hideshow />
        <button onClick={() => setdisplay(!display)}>Toggle Name</button>
        {
          display? <h1>Devendra</h1>:null
           
        }
      <Multicon />
      {/* <Prompt name="Ashutosh" age={30} gender="Male"/>
      <Prompt name={name1} age={age1} gender={gender1}/> */}
      {/* <Prompt user={userlist}/>
      <Prompt user={userlist2}/>
      <Prompt user={userlist3}/>
      <Prompt namec={collegename}/>
      <Prompt namec={collegename[0]}/> */}
      {/* <Prompt studenname={"Manish"}/> */}
      {
        student &&  <Prompt name={student} />
      }
      <button onClick={() => setstudent("John")}>Student Name change</button>


    </>
  )
}

export default App
