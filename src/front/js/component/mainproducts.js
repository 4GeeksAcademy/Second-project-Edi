import React,{useEffect, useState} from "react";
import "../../styles/mainproducts.css"
import ShareComponent from "./sharecomponent";
import Carrito from "./carrito";

const MainProducts = (props) =>{
   
    const [totalBatidorasVendidas, setTotalBatidorasVendidas] = useState(20);
    const [selectedColor, setSelectedColor] = useState("")
        
    const comprarBatidora = () => {
        setTotalBatidorasVendidas(totalBatidorasVendidas - 1);
    };
        
    const progreso = (totalBatidorasVendidas / 20) * 100;
        
    const [activeCircle, setActiveCircle] = useState(null);

    const handleCircleClick = (index) => {
        setActiveCircle(index);
    };
    useEffect(()=>{
        setSelectedColor("Pink")
        handleCircleClick(0)
    },[])

    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
  
    const toggleCart = () => {
      setShowCart(!showCart);
    };
  
    const addToCart = (product) => {
      setCartItems([...cartItems, product]);
    };

      
    return(
        <div className="container-fluid mt-5 ">
            <div className="row mt-5 mx-2">
                <div className="col-md-6" id="imageMainproduct">
                    <img  src={props.image} alt=""/>
                </div>
                <div className="col-md-6">
                    <div className="productInfo ">
                        <h2 className="pt-3">Batidora electrica</h2>
                        <p> € <span style={{fontSize:23}}>829</span><sup class="price__suffix">,00</sup></p>
                        <h4>Color - <span className="selectecColor">{selectedColor}</span></h4> 
                        <div className="d-flex justify-content-around col-md-2">
                            <i
                                className={`fa-solid fa-circle ${activeCircle === 0 ? 'active' : ''}`}
                                style={{ color: "#FF69B4" }}
                                onClick={() => {handleCircleClick(0)
                                            setSelectedColor("Pink")}
                                }></i>
                            <i
                                className={`fa-solid fa-circle ${activeCircle === 1 ? 'active' : ''}`}
                                style={{ color: "#EBEBEB" }}
                                onClick={() => {handleCircleClick(1)
                                    setSelectedColor("White")}
                                }></i>
                          
                        </div>
                        <p className="mt-4"><i class="fa-solid fa-gift me-3"></i> Envoltorio de regalo disponible</p>
                        <p><i class="fa-solid fa-arrow-left me-3"></i> 30 dias para devolución</p>
                        <p><i class="fa-solid fa-lock me-3"></i> 1 año de garantía</p>
                        <ShareComponent/>

                        <div>
                            <h2>Date prisa, solo quedan {totalBatidorasVendidas} en el stock!</h2>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: `${progreso}%` }}></div>
                            </div>
                        </div>
                        <div className="app">                      
                            {showCart && (
                                <Carrito cartItems={cartItems} />
                            )}
                        </div>
                        <button id="carrito" className="my-3" onClick={() =>{ 
                            addToCart('Producto 1')
                            toggleCart()
                            }}>Añadir al carrito</button>
                        <button  id="comprar"  onClick={comprarBatidora}>Comprar</button>
                    </div>    
                </div>
            </div>
           
        </div>
    )
}
export default MainProducts