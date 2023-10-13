import React, { useEffect } from 'react';
import "../../styles/carrito.css"





const Carrito = ({ cartItems }) => {

  useEffect(()=>{
    console.log(cartItems);
  },[])
  
  return (
    <div className="carrito">
      <h2>Carrito de compra</h2>
      <p>Envío gratis disponible</p>
      <hr/>
      <ul>
        {cartItems.map((item, index) => (
          <div key={index}>
            <div className='carritoImage'>
              <img src={item.image} alt="imagen producto" />
            </div>
            <div className='carritoInfo'>
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Carrito;

