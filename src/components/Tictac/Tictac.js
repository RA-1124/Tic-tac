import "./styles.css"
import { useState } from "react"

 const Square =({propiedad}) => {
    
   
    console.log(propiedad)
    return(
        <button  className="square"> {propiedad} </button>
    )
 }

export default function Board() {
    const [value, setValue] = useState(['O', "X", 'X', 'X', 'X', 'O', 'O', null, null])
    return (
    <>
    <div className="row">
    <Square propiedad={value[0]} />
    <Square propiedad={value[1]} />
    <Square propiedad={value[2]} />
    
    </div>
    <div  className="row">
    <Square propiedad={value[3]} />
    <Square propiedad={value[4]} />
    <Square propiedad={value[5]} />
    </div>
    <div  className="row">
    <Square propiedad={value[6]} />
    <Square propiedad={value[7]} />
    <Square propiedad={value[8]} />
    </div>

    </>
    )
  }
