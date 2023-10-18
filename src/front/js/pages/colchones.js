import React,{useEffect} from "react";


const Colchones = () =>{
    const getColchones = () =>{
        fetch(process.env.BACKEND_URL + 'api/items?category=colchones', { 
            method: "GET", 
            headers: { 
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((result) => {  
            console.log(result);
        })
        .catch((err) => {
        console.log(err);
        })
    }

    useEffect(()=>{
        getColchones()
    },[])

    return(
        <div>
        colchones
    </div>
    )
}
export default Colchones