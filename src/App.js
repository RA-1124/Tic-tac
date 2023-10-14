import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Square from "./components/Tictac/Tictac";

function App() {
  return(
     <Router>
      <Routes>
        < Route path="/inicio" element={<Square/>}/>

      
      </Routes>
     </Router>
     );
}

export default App;
