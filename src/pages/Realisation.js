import React from "react";
import Navbar from "../components/Navbar";
import ProjectList from "../components/ProjectList";
import Header from "../components/Header";
import Footer from "../components/Footer";



const Realisation = () => {
    return(
        <div className="Realisation">
            <Navbar/>
            <Header/>
            <ProjectList/>
            <Footer/>
        </div>
       

    );
}

export default Realisation;