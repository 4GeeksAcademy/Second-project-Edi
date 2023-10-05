import React from 'react';

const Carrito = ({ cartItems }) => {
  return (
    <div className="sidebar">
      <h2>Carrito de compra</h2>
      <p>Envio gratis disponible</p>
      <i class="fa-solid fa-cart-shopping"></i>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
    </div>
  );
};

export default Carrito;
