import React from "react";
import HomeCard from "./homecard";

const SalonCard = (props) =>{
    return(
        <div className="container-fluid mt-5">
            <h2 className="my-5">{props.title}</h2>
            <div className="row">
                <HomeCard title="Sofas" description="Transforma tu sala de estar con nuestra exquisita selección de sofás, diseñados para brindar comodidad y estilo inigualables, creando un espacio acogedor para momentos inolvidables con tus seres queridos"
                 img="https://cdn.pixabay.com/photo/2017/03/19/01/43/living-room-2155376_1280.jpg" />
                <HomeCard title="Armarios" description="Organiza tu espacio con nuestra elegante gama de armarios, creados para ofrecer almacenamiento funcional y sofisticado, permitiéndote mantener tus pertenencias ordenadas." img="https://cdn.pixabay.com/photo/2019/12/30/20/47/cupboard-4730589_1280.jpg"/>
                <HomeCard title="Mesillas" description="Potencia tu sala de estar con nuestra versátil colección de mesas, diseñadas para combinar practicidad y elegancia, añadiendo un toque de estilo y funcionalidad a tu hogar"
                 img="https://cdn.pixabay.com/photo/2020/02/18/16/13/lamp-4859938_1280.jpg"/>
            </div>
        </div>
    )
}

export default SalonCard