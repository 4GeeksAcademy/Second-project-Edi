import React, { Component } from "react";
import "../../styles/footer.css"

export const Footer = () => (
	<footer className="footer bg-light p-0 m-0 mt-5">
		<div className="row m-0 p-0" id="footerBoard">
			<div className="col-md-3">
				<h3>Links </h3>
				<div className="d-flex flex-column">
					<a href="/">Home</a>
					<a href="#">Shipping Policy</a>
					<a href="#">Refund Policy</a>
					<a href="#">Contact Us</a>
				</div>

			</div>
			<div className="col-md-3">
				<h3>Sobre nosotros</h3>
				<p>Conectando pasiones, <br/> entregando sonrisas. <br/> Tu tienda en línea  <br/> de confianza.</p>
			</div>
			<div className="col-md-3">
				<input type="email" id="emailFooter" className="bg-light col-md-11" placeholder="email@example.com" />
				<span>
                	<input type="submit" class="btn bg-warning mt-4 col-md-6" name="subscribe" id="subscribe" value="Subscribe"/>
                </span>
			</div>
			<div className="col-md-3">
				<h3>Conectate</h3>
				<div className="d-flex flex-row justify-content-around col-md-11 mt-3">
					<i class="fa-brands fa-facebook-f fa-2x mx-0"></i>
					<i class="fa-brands fa-instagram fa-2x"></i>
					<i class="fa-brands fa-twitter fa-2x"></i>
					<i class="fa-brands fa-whatsapp fa-2x"></i>
				</div>
			</div>
			<hr className="mt-5"/>
			<div className="d-flex flex-row justify-content-between mt-1">
				<div class="footer-links mt-1" >
					<ul className="d-flex flex-row px-0">
						<li><a href="/">© 2023, Exchange App</a></li>
							<p className="mx-3">|</p>
						<li><a target="_blank" rel="nofollow" href="#">Powered by Edi Javier</a></li>
					</ul>
				</div>
			<div className="stripePayments">
				<img style={{height:70, width:250}} src="https://support.mywifinetworks.com/hc/article_attachments/360055906133/5e1cce2c96d1d.png" alt=""/>
			</div>
			</div>
		
		</div>
	</footer>
);
