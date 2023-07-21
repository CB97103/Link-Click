import React from "react";
import { Link } from "react-router-dom";
import "../style/Item.css";

export default function Item(props) {
  return (
    <Link
      to={
        "/Detail/" +
        props.episode +
        "/" +
        props.image +
        "/" +
        props.name +
        "/" +
        props.descripcion +
        "/" +
        props.phrase
      }
    ><div className="titulo-ep">
      <div className="contenedor-episodio">
        <div className="ventana">
          <img
            className="imagen-episodio"
            src={require(`../img/${props.image}.jpg`)}
            alt={props.episode}
          />

          <div className="contenedor-texto-episodio">
            <p>{props.episode}</p>
          </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
