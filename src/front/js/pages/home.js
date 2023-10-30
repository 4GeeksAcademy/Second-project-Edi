import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Elements, CardElement,useStripe, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CarouselHome from "../component/carouselhome";
import HomeCard from "../component/homecard";
import DormitorioCard from "../component/dormitoriocard";
import SalonCard from "../component/saloncard";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [item,setItem] = useState([])
	const [images,setImages] = useState("")
	const amount = 1120 

	const getItemInfo = () =>{
		fetch(process.env.BACKEND_URL + 'api/items', { 
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
		getItemInfo()
	},[])

	const handleClick = () => {
		const phoneNumber = "34612273700";
		const message = "¡Hola! Me gustaria más información"; 
		const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
		  message
		)}`;
		window.open(whatsappLink);
	};
	
	const showItems = () => {
		return (
		  <div className="row">
			{item.map((item, index) => {
			  return <HomeCard item={item} key={index} image={item.image[0]}/>;
			})}
		  </div>
		);
	  };
	
	// const stripePromise = loadStripe('pk_test_51NvPj0GmhMwvqVPthRRewXoaKBfZlIqEM2cma9Ag6NlrgXm2dQ6Zvdrg7Wj8BhdOuvrVCWyGsqSJ6TnVJMhvTJDY002JjXnEzr');


	// const CheckoutForm = ()=>{ 

	// const stripe = useStripe()
	// const elements = useElements()

	// const payStripe = async (e)=>{
	// 		e.preventDefault()
	
	// 		const {error, paymentMethod} = await stripe.createPaymentMethod({
	// 			type: "card",
	// 			card: elements.getElement(CardElement)
	// 		})
	// 		if(!error){
	// 			const {id} = paymentMethod

	// 			fetch(process.env.BACKEND_URL + 'api/payment-stripe', { 
	// 				method: "POST", 
	// 				headers: { 
	// 					"Content-Type": "application/json",
	// 				},
	// 				body: JSON.stringify({ id, amount}) 
	// 			})
	// 			.then((res) => res.json())
	// 			.then((result) => { 
				
	// 				console.log(result);
	// 			})
	// 			.catch((err) => {
	// 			console.log(err);
	// 			})
	// 	}
	// }
	// return <form onSubmit={payStripe} className="form-group mt-3 d-flex flex-column justify-content-center" >
	// 		<CardElement className="bg-light p-3" />
	// 			<button className="btn btn-success " style={{marginTop:20}}>
	// 				Buy
	// 			</button>
	// 		</form>
	// }

	return (
		<div className="container-fluid m-0 p-0">
			<CarouselHome/>
			{/* <div className="row d-flex justify-content-center">
				<div className="col-3">
					<div className="card" style={{width:350}}>
					<img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-purple-2021?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202738000" alt="product-img"/>
					<div className="card-body">
						<h4 className="text-center">{amount}$</h4>
						<Elements stripe={stripePromise}  >
							<CheckoutForm />
						</Elements>
					</div>
					</div>
				</div>
			</div> */}
			<div className="row mt-5">
				<div className="col-md-4 text-center features">
					<h3>Envios gratis</h3>
					<p>En compras superiores a 150€</p>
				</div>
				<div className="col-md-4  text-center features">
					<h3>Atención 24/7</h3>
					<p>Nuestro equipo de atención al cliente está disponible las 24 horas del día</p>
				</div>
				<div className="col-md-4  text-center ">
					<h3>Calidad garantizada</h3>
					<p>Diseñada para superar tus expectativas y garantizar tu total satisfacción en cada compra</p>
				</div>
			</div>

			{/* <div className="container-fluid mt-4">
					{showItems()}			
			</div> */}
			<div className="container-fluid">
					<DormitorioCard title="Dormitorio"/>
			</div>
			<div className="container-fluid">
					<SalonCard title="Salon"/>
			</div>
			<div className="row mt-5">
				<div className="col-md-6 d-flex flex-column align-items-left justify-content-center p-5" style={{height:600, backgroundColor:"rgb(247, 243, 234)"}}>
					<h2 className="text-center ">Diseño de Interiores para tu Hogar</h2>
					<h6 className="text-center mb-5">Tu Hogar, Tu Estilo, Nuestro Compromiso</h6>

					<p>Explora nuestra colección exclusiva de muebles para dormitorios y salones. Transforma tu espacio en un oasis de comodidad y estilo con muebles diseñados especialmente para ti. Descubre la elegancia y funcionalidad en cada rincón de tu hogar.</p>
					<button className="btn btn-dark" style={{borderRadius:0}}>Comprar</button>
				</div>
				<div className="col-md-6 mt-3" id="canapeImage">
					<div className="row">
						<div className="col-md-4 image">
							<img src="https://cdn.pixabay.com/photo/2018/01/23/06/58/modern-minimalist-lounge-3100785_1280.jpg"  style={{height:280, width:300}}/>
						</div>
						<div className="col-md-4 offset-md-3 mt-5 image">
							<img src="https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839184_1280.jpg" style={{height:300, width:300}} />
						</div>
					</div>
					<div className="row"> 
						<div className="col-md-4 image" id="terceraImg">
						<img src="https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_1280.jpg" style={{height:300, width:300}}/>

						</div>
						<div className="col-md-4" id="middleImage">
							<img src="https://cdn.pixabay.com/photo/2020/02/01/06/12/living-room-4809587_1280.jpg" style={{height:350, width:300}}/>
						</div>
					</div>
				</div>
			</div>
	
			<div className="banner">
					<i className="fa-brands fa-whatsapp  fa-rotate-270 fa-3x" style={{color: "#ffffff"}} onClick={handleClick}></i>
			</div>
		</div>
	);
};

