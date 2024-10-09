import React from "react";
import {useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Apropos from "../components/Apropos";

const Accueil = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <section className="slider slider-expand-lg " id="slider">
                <div className="row"> 
                   <img src="./img/software-developer.jpg" alt="John Doe, developpeur web full stack" /> 
                    <div className="slider-info position-absolute top-50 text-center ">
                        <h1 className="text-white"> Bonjour, je suis John Doe</h1>
                        <h2 className="text-white"> Développeur web full stack</h2>
                        <button className="bg-primary rounded" onClick={() => { navigate ('/apropos') }}> En savoir plus</button>
                        </div>
                </div>
                
                
            </section>

            <Apropos />

            <Footer />
        </div>

    );
}

export default Accueil;