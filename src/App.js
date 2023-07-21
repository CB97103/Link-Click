import "./App.css";
import Login from "./components/Login";
import Listado from "./components/Listado"; 
import Detail  from "./components/Detail";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
   
    <Routes>
      
       <Route path="/" element={<Login />}/>
     <Route element={<ProtectedRoutes />} >
      <Route path="/Listado" element={<Listado />} />
      <Route path="/Detail/:nombre/:image/:name/:descripcion/:phrase" element={<Detail />} />
      </Route>
      </Routes>

  );
}

export default App;
