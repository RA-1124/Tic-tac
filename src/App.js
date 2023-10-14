import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Board from "./components/Tictac/Tictac";

function App() {
  return(
     <Router>
      <Routes>
        < Route path="/inicio" element={<Board/>}/>

      
      </Routes>
     </Router>
     );
}

export default App;
