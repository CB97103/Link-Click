import "../style/Login.css";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [usuario,setUsuario] =useState ("")
    const [contraseña, setContraseña] =useState ("")
    const [error,setError] =useState(false)
    const navigate = useNavigate()

    localStorage.removeItem("ingresando")

    const handleSubmit = (event) =>{
        event.preventDefault()
    
        if(usuario === "link" && contraseña === "123"){
            setError(false)
            localStorage.setItem("ingresando", true)
            console.log (localStorage.getItem("ingresando"))
            navigate("/Listado")
        } 
            setError(true)
    }
    return (
      <div className="login-fondo">
    <div className="box">
      <div className="container">
      <form className="login"
      onSubmit={handleSubmit}
      >
        <h1>Login</h1>
        <label>Usuario</label>
        <input type="text" placeholder="Ingrese el usuario"
            value={usuario}
            onChange={event => setUsuario(event.target.value)}
        />
        <label>Contraseña</label>
        <input type="password" placeholder="Ingrese la contraseña"
            value={contraseña}
            onChange={event => setContraseña(event.target.value)}
        />
          <button>Ingresar</button>
     
      </form>
      {error && <p>Todos los campos son requeridos</p>}
      </div>
    </div>
    </div>
  );
}
