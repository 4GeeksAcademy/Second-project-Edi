import React,{useState,useEffect} from "react";
import "../../styles/mainproducts.css"
import Carrito from "../component/carrito";
import ShareComponent from "../component/sharecomponent";
import { useParams } from "react-router-dom";

const SingleItem = (props) =>{
    const params = useParams()
    const [cantidad,setCantidad] = useState(0)
    const [item,setItem] = useState("") 
    const [showCart, setShowCart] = useState(false);
  
    const toggleCart = () => {
      setShowCart(!showCart);
    };
    const [cartItems, setCartItems] = useState([]); 

    const addToCart = (product) => {
      setCartItems([...cartItems, product])
    };

    const sumarCantidad = () =>{
        setCantidad(cantidad + 1)
    }
    const restarCantidad = () =>{
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
          }
    }

    const get_single_item = () =>{
        fetch(process.env.BACKEND_URL + 'api/single-item/' + params.id, { 
            method: "GET", 
            headers: { 
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((result) => {  
            setItem(result)
        })
        .catch((err) => {
        console.log(err);
        })
        
    }

    useEffect(()=>{
        get_single_item()
    },[])

    return(
        <div className="container-fluid mt-5 ">
        <div className="row mt-5 mx-2">
            <div className="col-md-8" id="imageMainproduct">
                <img  src={item.image} alt=""/>
            </div>
            <div className="col-md-4">
                <div className="productInfo ">
                    <h2 className="py-5">{item.title}</h2>
                    <p className="text-left">{item.description}</p>
                    <p className="mt-4"><i class="fa-solid fa-car me-3"></i>Entrega a domicilio</p>
                    <p><i class="fa-solid fa-arrow-left me-3"></i> 30 dias para devolución</p>
                    <p><i class="fa-solid fa-lock me-3"></i> 1 año de garantía</p>

                    <select className="form-select" id="tamañoCamaSelec" aria-label="Tamaño de cama">
                        <option selected>Selecciona tamaño</option>
                        <option value="1">Cama de </option>
                        <option value="2">Cama de </option>
                        <option value="3">Cama de </option>
                    </select>
                
                    <section className="d-flex flex-row justify-content-between">
                        <div className="quantityBoard d-flex flex-row align-items-center mt-3">
                            <input id="quantity" value={cantidad} /> 
                            <div className="d-flex flex-column ">
                                <button className="btnCantidad"><i class="fa-solid fa-angle-up" onClick={sumarCantidad}></i></button>
                                <button className="btnCantidad"><i class="fa-solid fa-angle-down" onClick={restarCantidad}></i></button>
                            </div>
                        </div>
                        <p className="mt-4"> € <span style={{fontSize:45}}>{item.price}</span><sup class="price__suffix">,00</sup></p>
                    </section>
                  
                  

                 
                    <div className="app">                      
                {showCart && (
                        <Carrito cartItems={cartItems} /> 
                    )}
                </div>
                <button id="carrito" className="my-3" onClick={() =>{ 
                    addToCart(item);
                    toggleCart();
                }}>Añadir al carrito</button>
                    <button  id="comprar">Comprar</button>
                </div>    
            </div>
        </div>
       
    </div>
    )
}

export default SingleItem