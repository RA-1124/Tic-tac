import "./styles.css";
import { useState } from "react";

export default function Board() {

  const [values, setValues] = useState([null, null, null, null, null, null, null, null, null]);//hook o variable de estado
  const [click, setClick] = useState(true); // hook o variable de estado

  // funcion que se hace llamar al dar click
  // adentro de la funcion se cambia el estado de las variables
  function handleClick(i) {
    if (values[i] || calculateWinner(values)) {
      //si el value es igual a null (false) por lo tanto no entra en la condicion y sigue con lo demas,
      // si el value es true entonces entra al if y e lreturn hace que salga de la funcion
      return;
    }
    const arrayNuevo = [...values];
    //le pasamos un parametro que es indice para que cambie solo el de esa posicion
    if (click) {
      arrayNuevo[i] = "X";
    } else {
      arrayNuevo[i] = "O";
    }
    //console.log('renderizandome')
    setValues(arrayNuevo);
    setClick(!click);
  }

  if (calculateWinner(values)) {
    const winner = calculateWinner(values);
    console.log(winner);
    return (
      <>
        <h2> HAS GANADO {winner}!!</h2>
        <button
          onClick={() =>
            setValues([null, null, null, null, null, null, null, null, null])
          }
        >
          {" "}
          Reiniciar juego
        </button>
      </>
    );
  }
  const funcionHola = (nombre) => setValues(['X', 'X', null, null, null, null, null, null, null])
   

   return (
    <>
        <button onClick={() => funcionHola('nombre')}>PRUEBA</button>
      <div className="row">
        <Square valorAlClick={() => handleClick(0)} dato={values[0]} />
        <Square valorAlClick={() => handleClick(1)} dato={values[1]} />
        <Square valorAlClick={() => handleClick(2)} dato={values[2]} />
      </div>
      <div className="row">
        <Square valorAlClick={() => handleClick(3)} dato={values[3]} />
        <Square valorAlClick={() => handleClick(4)} dato={values[4]} />
        <Square valorAlClick={() => handleClick(5)} dato={values[5]} />
      </div>
      <div className="row">
        <Square valorAlClick={() => handleClick(6)} dato={values[6]} />
        <Square valorAlClick={() => handleClick(7)} dato={values[7]} />
        <Square valorAlClick={() => handleClick(8)} dato={values[8]} />
      </div>
    </>
  );
}

const Square = ({ valorAlClick, dato }) => {
  //valor al Click es uan funcion y dato es object hasta que se da click y se convierte a string
  //console.log(typeof dato, 'tipo de dato')
  // console.log(typeof valorAlClick, "tipo de valorAlClick")
  return (
    <button onClick={valorAlClick} className="square">
      {" "}
      {dato}{" "}
    </button>
  );
};
//cambio 2 
//cambio 3 
function calculateWinner(values) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (values[a] === values[b] && values[a] === values[c]) {
      return values[a];
    }
  }
  return null;
}
