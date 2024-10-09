import React from "react";
import {Link} from 'react-router-dom'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Mention() {
    return(
        <div className="Mention">
            <Navbar />
            <Header />
            <section className="slider slider-expand-lg" id="slider">
                <div className="row">
                    <img src="./img/developpement-web.jpg" alt="John Doe, developpeur web full stack" /> 
                </div>
            </section>

            <div className="text-center mt-5">
                <h2 className="text-uppercase"> Mentions légales </h2>
                <span className="divider"></span>
            </div>

            <div className="accordion mt-5" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Editeur du site
                       </button>
                    </h2>
                   <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <h3> John Doe</h3>
                            <p> 40 Rue Laure Diebold</p>
                            <p> 69009 Lyon, France</p>
                            <p> 06 20 30 40 50</p>
                            <p> john.doe@gmail.com</p>
                        </div>

                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Hébergeur
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <h3> Always Data</h3>
                            <p> 91 rue du Faubourg Saint Honoré</p>
                            <p> 75008 Paris</p>
                            <p> www.alwaysdata.com</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           Crédits
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <h3>Crédits</h3>
                            <p>Site développé par John Doe, étudiant du CEF</p>
                            <p>Les images libres de droit sont issues du sites <Link to="https://pixabay.com/fr/"> Pixabay</Link> </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Mention;