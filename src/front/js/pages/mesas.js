import React,{useEffect, useState} from "react";
import CanapesCard from "../component/canapesCard";


const Mesas = () =>{
    const [mesas,setMesas] = useState([])
    const getMesas = () => {
        fetch(process.env.BACKEND_URL + 'api/items?category=mesas', { 
            method: "GET", 
            headers: { 
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((result) => {  
            setMesas(result)
        })
        .catch((err) => {
        console.log(err);
        })
    }

    useEffect(()=>{
        getMesas()
    },[])

    const showMesas = () => {
        return mesas.map((item, index) => {
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
            {showMesas()}
         </div>
    </div>
    )
}
export default Mesas