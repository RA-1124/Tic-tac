import "./styles.css"
 const Square =({value}) => {
    return(
        <button className="square"> {value} </button>
    )
 }

export default function Board() {
    return (
    <>
    <div className="row">
    <Square/>
    <Square/>
    <Square/>
    
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
