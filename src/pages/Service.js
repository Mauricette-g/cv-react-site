import React from "react";
import Navbar from "../components/Navbar";
import ServiceList from "../components/ServiceList";
import Header from "../components/Header";
import Footer from "../components/Footer";



const Service = () => {
    return(
        <div className="Service">
            <Navbar/>
            <Header/>
            <ServiceList/>
            <Footer/>
        </div>
       

    );
}

export default Service;