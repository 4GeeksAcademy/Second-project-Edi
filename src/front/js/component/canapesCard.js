import React from "react";
import "../../styles/canapesCard.css"
import { useNavigate, useParams } from "react-router-dom";


const CanapesCard = (props) =>{
  const navigate= useNavigate()
        return(
        <div className="container-fluid" id="canapeCard">
                <div className="canapeCardImage">
                    <img src={props.canape.image}  className="p-2"/>
                </div>
                <div className=" d-flex flex-column align-items-center justify-content-center">
                <h3 id="canapeTitle" className="col-md-10">{props.canape.title}</h3>
                <div className="d-flex flex-row col-md-12  p-2 justify-content-around">
                  <div className="d-flex flex-column  text-center">
                    <p><strong>Capacidad</strong></p>
                    <p>{props.canape.capacidad}cm</p>
                  </div>
                  <div className="d-flex flex-column  text-center">
                    <p><strong>Colores</strong></p>
                    <p>125cm</p>
                  </div>
                  <div className="d-flex flex-column text-center">
                    <p> <strong>Profondidad</strong></p>
                    <p>{props.canape.profundidad}</p>
                  </div>
              </div>
              <section className="d-flex flex-row justify-content-between  col-md-10">
                <h3>{props.canape.price}€</h3>
                <div className="btnBoardSingle bg-light ">
                  <i class="fa-solid fa-arrow-right " onClick={()=>navigate(`${props.single}`)}></i>
                </div>
              </section>
            
                </div>
          
         
        </div>
    )
}
export default CanapesCard