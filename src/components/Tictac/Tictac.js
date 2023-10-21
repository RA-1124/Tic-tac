import "./styles.css"
import { useState } from "react"



 const Square =({valorAlClick ,dato}) => {
    console.log(dato)
    return(
        <button onClick={valorAlClick} className="square"> {dato} </button>
    )
 }

export default function Board() {
    const [values, setValues] = useState([null, null, null, null,null, null, null, null, null])
    function handleClick() {
        //let prueba = values
       // setvalues(prueba[1]="OOO");
       //console.log(values)
       //console.log(prueba[3]="00")
       let prueba = values.slice
       prueba[1] = "0"
       setValues(prueba)
     }
    
    return (
    <>
    <div className="row">
    <Square dato={Square[0]} valorAlClick={() => handleClick(0)} />
    <Square valorAlClick={handleClick(1)} dato={values[1]} />
    <Square valorAlClick={handleClick(2)} dato={values[2]} />
    
    </div>
    <div  className="row">
    <Square valorAlClick={handleClick(3)} dato={values[3]} />
    <Square  valorAlClick={handleClick(4)} dato={values[4]}/>
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
