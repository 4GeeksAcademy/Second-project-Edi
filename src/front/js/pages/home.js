import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Elements, CardElement,useStripe, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CarouselHome from "../component/carouselhome";
import MainProducts from "../component/mainproducts";
import portada2 from "../../img/portada.jpg";


export const Home = () => {
	const { store, actions } = useContext(Context);
	const amount = 1120 

	const handleClick = () => {
		const phoneNumber = "34654580067";
		const message = "¡Hola! estas muy guapa "; 
		const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
		  message
		)}`;
		window.open(whatsappLink);
	};
	
	
	const stripePromise = loadStripe('pk_test_51NvPj0GmhMwvqVPthRRewXoaKBfZlIqEM2cma9Ag6NlrgXm2dQ6Zvdrg7Wj8BhdOuvrVCWyGsqSJ6TnVJMhvTJDY002JjXnEzr');


	const CheckoutForm = ()=>{ 

	const stripe = useStripe()
	const elements = useElements()

	const payStripe = async (e)=>{
			e.preventDefault()
	
			const {error, paymentMethod} = await stripe.createPaymentMethod({
				type: "card",
				card: elements.getElement(CardElement)
			})
			if(!error){
				const {id} = paymentMethod

				fetch(process.env.BACKEND_URL + 'api/payment-stripe', { 
					method: "POST", 
					headers: { 
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ id, amount}) 
				})
				.then((res) => res.json())
				.then((result) => {  
					console.log(result);
				})
				.catch((err) => {
				console.log(err);
				})
		}
	}
	return <form onSubmit={payStripe} className="form-group mt-3 d-flex flex-column justify-content-center" >
			<CardElement className="bg-light p-3" />
				<button className="btn btn-success " style={{marginTop:20}}>
					Buy
				</button>
			</form>
	}

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
					<p>En compras superiores a 50$</p>
				</div>
				<div className="col-md-4  text-center features">
					<h3>Atención 24/7</h3>
					<p>Equipo de atención disponible</p>
				</div>
				<div className="col-md-4  text-center ">
					<h3>Envios gratis</h3>
					<p>En compras superiores a 50$</p>
				</div>
			</div>
			<div className="row">
				<MainProducts image={portada2}/>
			</div>
			<div className="banner">
					<i className="fa-brands fa-whatsapp  fa-rotate-270 fa-3x" style={{color: "#ffffff"}} onClick={handleClick}></i>
			</div>
		</div>
	);
};

