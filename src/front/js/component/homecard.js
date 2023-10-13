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
            <div id="titleCard" className="col-md-8   d-flex align-items-center justify-content-center">
              <h4 className="text-center">{props.title}</h4>
            </div>
            <div className="p-2 ">
              <p>{props.description}</p>
            </div>
            
              <div className="btnBoard bg-light offset-md-10">
                <i class="fa-solid fa-arrow-right " onClick={()=>navigate(`${props.referencia}`)}></i>
              </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
