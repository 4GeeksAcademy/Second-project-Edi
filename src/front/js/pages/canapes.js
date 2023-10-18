import React, { useEffect, useState } from "react";
import CanapesCard from "../component/canapesCard";
import { useParams } from "react-router-dom";

const Canapes = () =>{
    const params = useParams()
    const [canapes,setCanapes] = useState([])

    
    const getCanapes = () =>{
        fetch(process.env.BACKEND_URL + 'api/items?type=canapes', { 
            method: "GET", 
            headers: { 
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            setCanapes(result)
        })
        .catch((err) => {
        console.log(err);
        })
    }

    useEffect(()=>{
        getCanapes()
    },[])

    const showCanapes = () => {
        return canapes.map((item, index) => {
            return (
                <div className="col-md-3" key={index}>
                   <CanapesCard canape={item} single={`/single-item/${item.id}`} />
                </div>
            );
        });
    }
            
    return(
        <div className="container-fluid mt-5">
         <div className="row d-flex justify-content-around">
            {showCanapes()}
         </div>
    </div>
    )
}
export default Canapes