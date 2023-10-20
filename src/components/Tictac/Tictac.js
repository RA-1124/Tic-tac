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
        let prueba = values
        setvalues(prueba[1]="O");
     }
    
    return (
    <>
    <div className="row">
    <Square valorAlClick={handleClick} dato={values[0]}/>
    <Square valorAlClick={handleClick} dato={values[1]} />
    <Square valorAlClick={handleClick} dato={values[2]} />
    
    </div>
    <div  className="row">
    <Square valorAlClick={handleClick} dato={values[3]} />
    <Square  valorAlClick={handleClick} dato={values[4]}/>
    <Square  valorAlClick={handleClick} dato={values[5]}/>
    </div>
    <div  className="row">
    <Square  valorAlClick={handleClick} dato={values[6]}/>
    <Square valorAlClick={handleClick} dato={values[7]} />
    <Square  valorAlClick={handleClick} dato={values[8]}/>
    </div>

    </>
    )
  }
