import React from "react";
import "../../styles/canapesCard.css"
import { useNavigate, useParams } from "react-router-dom";


const ArmariosCard = (props) =>{
  const navigate= useNavigate()

        return(
        <div className="container-fluid my-3" id="canapeCard">
                <div className="canapeCardImage">
                    <img src={props.item.image}  className="p-2"/>
                </div>
                <div className=" d-flex flex-column align-items-center justify-content-center">
                <h4 id="canapeTitle" className="col-md-10">{props.item.title}</h4>
                <div className="d-flex flex-row col-md-12  p-2 justify-content-around">
                  <div className="d-flex flex-column  text-center">
                    <p><strong>Medidas</strong></p>
                    <p>{props.item.altura} x {props.item.longitud} x {props.item.profundidad} cm</p>
                  </div>
                  <div className="d-flex flex-column text-center">
                    <p> <strong>Colores</strong></p>
                    <p>{props.item.color}</p>
                  </div>
              </div>
              <section className="d-flex flex-row justify-content-between  col-md-10">
                <h3>{props.item.price}€</h3>
                <div className="btnBoardSingle bg-light ">
                  <i class="fa-solid fa-arrow-right " onClick={()=>navigate(`${props.single}`)}></i>
                </div>
              </section>
            
                </div>
        </div>
    )
}
export default ArmariosCard