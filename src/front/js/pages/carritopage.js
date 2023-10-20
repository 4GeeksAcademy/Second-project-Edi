import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Carrito from "../component/carrito";
import "../../styles/carritopage.css"


const CarritoPage = () =>{
    const {store,actions} = useContext(Context)
    const items = store.carrito

    const showCarrrito = () =>{
      return items.map((item,index)=>{
            return <Carrito key={index} item={item} />
      })
    }

    const showEachPedido = () =>{
        return items.map((item,index)=>{
            return <div className="d-flex flex-row justify-content-between">
                    <p>{item.title}</p>
                        <section className="d-flex flex-row">
                            {/* <p className="me-5">x1</p> */}
                            <p>{item.price} €</p>
                        </section>
                 
            </div>
        })
    }

    const sumarTotalPrecio = () =>{
        const Total = items.reduce((total, item) => total + item.price, 0);
        return Total;
    }

    return(
        <div className="container-fluid d-flex flex-row col-md-11">
            <section className="col-md-8 me-4">
                <h3>CESTA {store.carrito.length} PRODUCTOS</h3>
                <p>Envío gratis disponible</p>
                <div>
                    {showCarrrito()}
                </div>
            </section>

            <section className='col-md-4'>
                <div>
                    <h3>RESUMEN DEL <strong>PEDIDO</strong></h3>
                </div>
                <div className="bg-light" id="resumenPedido">
                    {showEachPedido()}
                    <hr/>
                    <div className="d-flex flex-row justify-content-between">
                        <p>Gastos de envio</p>
                        <p>Gratis</p>
                    </div>
                    <hr/>
                    <div className="d-flex flex-row justify-content-between">
                        <p>Total</p>
                        <p> <strong>{sumarTotalPrecio()} €</strong></p>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default CarritoPage