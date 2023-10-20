import "./styles.css"
import { useState } from "react"



 const Square =({valorAlClick ,dato}) => {
    console.log(dato)
    return(
        <button onClick={valorAlClick} className="square"> {dato} </button>
    )
 }

export default function Board() {
    const [values, setvalues] = useState([null, null, null, null,null, null, null, null, null])
    function handleClick() {
        setvalues("X");
     }
    
    return (
    <>
    <div className="row">
    <Square valorAlClick={handleClick} dato={values}/>
    <Square valorAlClick={handleClick} dato={values} />
    <Square valorAlClick={handleClick} dato={values} />
    
    </div>
    <div  className="row">
    <Square valorAlClick={handleClick} dato={values} />
    <Square  valorAlClick={handleClick} dato={values}/>
    <Square  valorAlClick={handleClick} dato={values}/>
    </div>
    <div  className="row">
    <Square  valorAlClick={handleClick} dato={values}/>
    <Square valorAlClick={handleClick} dato={values} />
    <Square  valorAlClick={handleClick} dato={values}/>
    </div>

    </>
    )
  }
