import "./styles.css"
import { useState } from "react"

 const Square =({propiedad}) => {
    const [value, setValue] = useState(null)
    const haciendoClick = () => { 
        setValue("X")
    }
    console.log(value)
    return(
        <button onClick={haciendoClick} className="square"> {value} </button>
    )
 }

export default function Board() {
    return (
    <>
    <div className="row">
    <Square propiedad={"A"}/>
    <Square propiedad={"A"}/>
    <Square propiedad={"a"}/>
    
    </div>
    <div  className="row">
    <Square/>
    <Square/>
    <Square/>
    </div>
    <div  className="row">
    <Square/>
    <Square/>
    <Square/>
    </div>

    </>
    )
  }
