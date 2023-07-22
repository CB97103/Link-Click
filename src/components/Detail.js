import { useParams } from "react-router-dom";
import "../style/Detail.css";
import { useNavigate } from "react-router-dom";

export default function Detail() {
  let { nombre } = useParams();
  let { image } = useParams();
  let { name } = useParams();
  let { descripcion } = useParams();
  let { phrase } = useParams();

  const navigate = useNavigate();


  return (
    <div className="fondo">
      <div className="contenedor-ep">
        <img
          className="imagen-detalle"
          src={require(`../img/${image}.jpg`)}
          alt={"imagen" + nombre}
        />

        <div className="detalles">
          <p>{nombre}</p>
          <p>{name}</p>
          <p>{descripcion}</p>
          { phrase === "0" ? <></>  : <p>{phrase}</p>}

          <button onClick={() => {
            navigate ('/Listado')
          }}>Regresar</button>
        </div>
      </div>
    </div>
  );
}
