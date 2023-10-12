import React from "react";
import HomeCard from "./homecard";

const CategoryCard = (props) =>{
    return(
        <div className="container-fluid mt-5">
            <h2 className="my-5">{props.title}</h2>
            <div className="row">
                <HomeCard title="Canapés" img="https://www.elmueble.com/medio/2020/10/05/canape-abatibles-de-ikea_3e217aca_2000x2000.jpg" />
                <HomeCard title="Cabeceros" img="https://www.maxcolchon.com/images/descripcion-cabeceros/descripcion-cabecero-paris-polipiel-desktop.jpg"/>
                <HomeCard title="Colchones" img="https://www.dormideo.com/cdn/shop/products/VCGF--001.jpg?v=1619088465&width=1206"/>
            </div>
        </div>
    )
}

export default CategoryCard