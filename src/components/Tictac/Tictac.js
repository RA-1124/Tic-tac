import "./styles.css"
import { useState } from "react"



 const Square =({valorAlClick ,dato}) => {
    console.log(dato, 'hijo')

    return(
        <button onClick={valorAlClick} className="square"> {dato} </button>
    )
 }

export default function Board() {
    const [values, setValues] = useState([null, null, null, null,null, null, null, null, null])
    
    function handleClick(i) {
        const arrayNuevo = values.slice()
        arrayNuevo[i] = "X"
        setValues(arrayNuevo);
     }
    
    return (
    <>
    <div className="row">
    <Square valorAlClick={() => handleClick(0)} dato={values[0]}/>
    <Square valorAlClick={() => handleClick(1)} dato={values[1]} />
    <Square valorAlClick={() => handleClick(2)} dato={values[2]} />
    
    </div>
    <div  className="row">
    <Square valorAlClick={() => handleClick(3)} dato={values[3]} />
    <Square  valorAlClick={() => handleClick(4)} dato={values[4]}/>
    <Square  valorAlClick={() => handleClick(5)} dato={values[5]}/>
    </div>
    <div  className="row">
    <Square  valorAlClick={() => handleClick(6)} dato={values[6]}/>
    <Square valorAlClick={() => handleClick(7)} dato={values[7]} />
    <Square  valorAlClick={() => handleClick(8)} dato={values[8]}/>
    </div>

    </>
    )
  }
