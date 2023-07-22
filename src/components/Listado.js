import React from "react";
import Item from "./Item";
import "../style/Listado.css";
import YoutubeEmbed from "./YoutubeEmbed.js";
import { useNavigate } from "react-router-dom";

export default function Listado() {
  
  const navigate = useNavigate();
  const cerrarSesion = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (

    <div className="fondo-listado">
      
      <div className="contenedor-listado">
        
      <div className="home">
    <div className="contenedor-inicio">

      <div className="contenedor-boton">
      <button className="logout" onClick={cerrarSesion}>
        Cerrar sesion
      </button>
      </div>
      
      <div className="textos">
              <h1 className="titulo">Link click</h1>
              
              <p className="sinopsis">
              Usando superpoderes para ingresar las fotos de sus clientes una por una, Cheng Xiaoshi y Lu Guang 
              toman en serio su trabajo en "Time Photo Studio", una pequeña tienda de fotografía ubicada en el 
              contexto de una metrópolis moderna. 
              </p>

             <p className="trailer">
              <a href="https://www.youtube.com/watch?v=HxoR_7jVBCM" target="_blank" rel="noreferrer">Trailer</a>
            </p>
            </div>
      </div>
      </div>

      <div className="episodios">
        
        <Item 
          episode="Episodio 1"
          image="ep1"
          name="Emma"
          descripcion="Cheng Xiaoshi entra en el mundo de las fotos de Emma, una empleada de Quede Games, 
                       bajo el mando de Lu Guang con el fin de obtener pruebas sobre unos informes financieros falsificados."
          phrase="0"
          />

        <Item 
          episode="Episodio 2"
          image="ep2"
          name="Receta secreta"
          descripcion="Yuxia, la propietaria de una cadena de restaurantes, busca a la pareja de viajeros del tiempo para obtener
                       la receta de una sopa que solo conoce su socia Lin Zhen."
          phrase="El retrato es tu espejo. Eres tú - August Sander"
          />

        <Item 
          episode="Episodio 3"
          image="ep3"
          name="Solo puede perder, no debe ganar" 
          descripcion="Cheng Xiaoshi entra en la foto de juventud de un nuevo cliente arrepentido para jugar un partido de básquet muy especial."
          phrase="Si tus fotos no son lo suficientemente buenas, no las estás lo suficientemente cerca - Robert Capa"
          />

        <Item 
          episode="Episodio 4"
          image="ep4"
          name="Declaración"
          descripcion="El encargo marchaba bien, pero Cheng Xiaoshi se da cuenta de que la misión se dirige hacia un recuerdo inolvidable."
          phrase="0"
          />

        <Item 
          episode="Episodio 5.5"
          image="ep5"
          name="Adiós"
          descripcion="Enfrentándose a un pasado irreversible, Cheng Xiaoshi quiere cambiar el futuro."
          phrase="0"
          />
         
         <Item 
          episode="Episodio 6"
          image="ep6"
          name="Buscar a un hijo"
          descripcion="El policía Xiao Li entra al estudio para encargarles una misión, con la esperanza de que Cheng Xiaoshi y Lu Guang
                       le ayuden a investigar un caso de secuestro infantil."
          phrase="You have to be ready for luck - Neil Leifer"
          />

        <Item 
          episode="Episodio 7"
          image="ep7"
          name="Tía Mei"
          descripcion="Nadie sabe dónde está Doudou, pero la persistencia de Cheng Xiaoshi arroja nueva luz sobre el caso."
          phrase="El fotógrafo debe ser una parte del cuadro - Arnold Newman"
          />
         
         <Item 
          episode="Episodio 8"
          image="ep8"
          name="Sin señal"
          descripcion="Además de resolver los problemas sentimentales de Xu Shanshan, la amiga de Qiao Ling, el Estudio 
                      Fotográfico El Tiempo recibirá una noticia inesperada."
          phrase="Una buena fotografía es como un buen sabueso, tonto, pero elocuente - Eugène Atget"
          />

        <Item 
         episode="Episodio 9"
         image="ep9"
         name="Consecuencia de buenas intenciones"
         descripcion="La desaparición de Xu Shanshan no es tan sencilla como parece. Además, Lu Guang descubre pistas inesperadas en las fotos."
         phrase="While photographs may not lie, liars may photograph - Lewis Hine "
          />

        <Item 
         episode="Episodio 10"
         image="ep10"
         name="Trampa"
          descripcion="Para garantizar la seguridad de Xu Shanshan, Cheng Xiaoshi hace un trato con el asesino."
          phrase="The negative is the equivalent of the composer's score, and the print the performance - Ansel Adams "
          />

        <Item 
         episode="Episodio 11"
         image="ep11"
         name="Personas de luz"
          descripcion="Aunque consiguen arrestar al asesino, la batalla para Cheng Xiaoshi y Lu Guang aún no ha terminado."
          phrase="0"
          />
      </div>
      <br/>
        <div className="soundtrack">
          <div className="tsound">
          <h2>Soundtrack</h2>
          </div>
          <div className="contenedor-video">
           <div className="boxv">
           <YoutubeEmbed embedId="_cuCfmOsuCA"/> 
             <p>Dive back in time </p> 
             <p>Bai Sha JAWS</p>
           </div>

           <div className="boxv">
            <YoutubeEmbed embedId="ly2GjsxKtg0"/> 
              <p>OverThink </p>
              <p>Fan Ka</p>
           </div>

          </div>  
       </div>
    </div>
    </div>
       );
}
