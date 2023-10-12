import React from "react";
import "../../styles/homecard.css";
import { useNavigate } from "react-router-dom";

const HomeCard = (props) => {
  const navigate = useNavigate()
  return (
    <div className="col-md-4 mb-3" id="singleItemCard">
      <div className="card" >
        <div id="singleItemCardImage">
          <img
            src={props.img}
            className="card-img p-2"
            alt="..."
          />
        </div>
        <div className="cardInfo p-2  d-flex flex-column align-items-center justify-content-center">
            <div id="titleCard" className="col-md-8  d-flex align-items-center justify-content-center">
              <h4 className="text-center">{props.title}</h4>
            </div>
              <section className="d-flex flex-row  justify-content-around">
                <div className="d-flex flex-column  text-center">
                  <p>Capacidad</p>
                  <p>125cm</p>
                </div>
                <div className="d-flex flex-column  text-center">
                  <p>Colores</p>
                  <p>125cm</p>
                </div>
                <div className="d-flex flex-column text-center">
                  <p>Profondidad</p>
                  <p>35cm</p>
                </div>
              </section>
              <section className="d-flex flex-row">
                <h3>230$</h3>
              </section>
              <div className="btnBoard bg-light offset-md-10">

                <i class="fa-solid fa-arrow-right " onClick={()=>navigate("/item")}></i>
              </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
