import React from "react";
import "../../styles/topbar.css"

const TopBar = () =>{
    return (
        <div className="container-fluid p-0">
            <div className="row bg-dark" id="announceBoard">
                <div class="col-md-6 offset-md-3">
                    <strong><p className="text-white mb-0 iconsAnuncio">ENVIOS POR TODA LA PENINSULA IBERICA</p></strong>
                </div>
                <div class="col-md-3 d-flex justify-content-end px-4" id="iconsHome">
                    <i className="fa-brands fa-facebook-f mx-3"></i>
                    <i className="fa-brands fa-instagram mx-3"></i>
                    <i className="fa-brands fa-twitter mx-3"></i>
                    <i className="fa-brands fa-whatsapp mx-3"></i>
                </div>
            </div>
        </div>    
    )
}
export default TopBar