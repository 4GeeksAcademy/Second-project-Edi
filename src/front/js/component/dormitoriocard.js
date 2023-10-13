import React from "react";
import HomeCard from "./homecard";

const DormitorioCard = (props) =>{

    return(
        <div className="container-fluid mt-5">
            <h2 className="my-5">{props.title}</h2>
            <div className="row">
                <HomeCard title="Canapés" description="Encuentra la combinación perfecta de funcionalidad y sofisticación con nuestros canapés de dormitorio, diseñados para maximizar el espacio y realzar la estética de tu hogar" 
                referencia="/canapes"  img="https://www.elmueble.com/medio/2020/10/05/canape-abatibles-de-ikea_3e217aca_2000x2000.jpg" />
                <HomeCard title="Cabeceros" description="Transforma tu espacio de descanso con nuestra elegante selección de cabeceros meticulosamente diseñados para proporcionar sofisticación y confort, brindando un toque distintivo a tu santuario personal"
                 referencia="/cabeceros" img="https://www.maxcolchon.com/images/descripcion-cabeceros/descripcion-cabecero-paris-polipiel-desktop.jpg"/>
                <HomeCard title="Colchones"  description="Sumérgete en una experiencia de descanso sin igual con nuestra innovadora línea de colchones, meticulosamente confeccionados para asegurar un sueño reparador y revitalizante en cada noche"
                 referencia="/colchones" img="https://www.dormideo.com/cdn/shop/products/VCGF--001.jpg?v=1619088465&width=1206"/>
            </div>
        </div>
    )
}

export default DormitorioCard