import React from "react";
import HomeCard from "./homecard";

const SalonCard = (props) =>{
    return(
        <div className="container-fluid mt-5">
            <h2 className="my-5">{props.title}</h2>
            <div className="row">
                <HomeCard title="Sofas" description="Crea un espacio acogedor con nuestra exquisita selección de sofás, ideal para momentos inolvidables con tus seres queridos."
                 referencia="/sofas" 
                 img="https://cdn.pixabay.com/photo/2017/03/19/01/43/living-room-2155376_1280.jpg" />
                <HomeCard title="Armarios"
                referencia="/armarios"  description="Maximiza tu espacio con nuestra elegante gama de armarios, diseñados para un almacenamiento funcional y sofisticado." img="https://cdn.pixabay.com/photo/2019/12/30/20/47/cupboard-4730589_1280.jpg"/>
                <HomeCard title="Mesas" description="Transforma tu sala con nuestra amplia gama de mesas, diseñadas para ofrecer estilo y funcionalidad excepcionales en tu hogar"
                 referencia="/mesas" 
                 img="https://cdn.pixabay.com/photo/2020/02/18/16/13/lamp-4859938_1280.jpg"/>
            </div>
        </div>
    )
}

export default SalonCard