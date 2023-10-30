import React,{useEffect, useState} from "react";
import ArmariosCard from "../component/armariosCard";

const Armarios = () =>{
    const [armarios,setArmarios] = useState([])
    const getArmarios = () => {
        fetch(process.env.BACKEND_URL + 'api/items?category=armarios', { 
            method: "GET", 
            headers: { 
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((result) => {  
            setArmarios(result)
        })
        .catch((err) => {
        console.log(err);
        })
    }

    useEffect(()=>{
        getArmarios()
    },[])

    const showArmarios = () => {
        return armarios.map((item, index) => {
            return (
                <div className="col-md-3" key={index}>
                   <ArmariosCard item={item} single={`/single-item/${item.id}`} />
                </div>
            );
        });
    }
            
    return(
        <div className="container-fluid mt-5">
         <div className="row d-flex justify-content-around">
            {showArmarios()}
         </div>
    </div>
    )
}
export default Armarios