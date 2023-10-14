import "./styles.css"
import { useState } from "react"

 const Square =({propiedad}) => {
    
   
    console.log(propiedad)
    return(
        <button  className="square"> {propiedad} </button>
    )
 }

export default function Board() {
    const [value, setValue] = useState("PR")
   
    return (
    <>
    <div className="row">
    <Square propiedad={value} />
    <Square />
    <Square />
    
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
