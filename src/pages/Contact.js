import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../components/Contact.css'
import Header from "../components/Header";

function Contact() {
    return(
        <div className="Contactme">
            <Navbar />
			<Header />
            <div className="contact" id="contact" >
			    <div class="container bg-white">
					<div className="contact-title mt-3 text-center"> 
					   <h2 className="page-title text-uppercase text-center">Me contacter</h2>
					   <p className="pcontact text-center mb-1">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de renplir le formulaire de contact.</p>
					   <span className="divider"></span>
					</div>
			        <div className="row">
					  <div className="col-md-6 mt-2">
					    <h3 className="text-start">Formulaire de contact</h3>
						<span className="hdivider mb-2"></span>
					    <p className="text-start">Pour me contacter, merci de remplir le formulaire ci-dessous.</p>
					    <form action="index.html" method="post">
						    <div className="mb-3">
					            <input type="text" className="form-control" id="nom" placeholder="Votre nom" required />
					        </div>
						    <div className="mb-3">
	
					            <input type="email" className="form-control" id="email" placeholder="Votre addresse email" required />
								
					        </div>
						    <div className="mb-3">
					            <input type="tel" className="form-control" id="phone" placeholder="Votre numéro de téléphone" required />
					        </div>
							<div class="mb-3">
					            <input type="subject" className="form-control" id="sujet" placeholder="Votre sujet" required />
					        </div>
						    <div class="mb-3">
							    <textarea rows="4" cols="50" className="form-control" id="message" placeholder="Votre message" required></textarea>
						    </div>
							<div className="d-flex justify-content-center">
							    <button type="submit" className="btn btn-info text-light d-flex justify-items-align">Envoyer</button>
							</div>
						    </form>
				        </div>

				        <div class="col-md-6 mt-2">
					        <h3 className="text-start">Mes coordonnées</h3>
							<span className="hdivider mb-2"></span>
							<address className="text-start" >
								<i className="fas fa-map-marker"> </i> 40 rue Laure Diebold, 69009 Lyon, France <br></br>
								<i className="fas fa-mobile-alt"> </i> 06 20 30 40 50 <br></br>
							</address>
							<iframe title="address-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657540106!2d4.796403975435567!3d45.77866571240338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1727980951085!5m2!1sfr!2sfr" width="500" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
				        </div>
			        </div>
		        </div>
		   </div>
            
            <Footer />
        </div>
    )
}

export default Contact;