import React from "react";
import Navbar from "../components/Navbar";
import BlogList from "../components/BlogList";
import Header from "../components/Header";
import Footer from "../components/Footer";



const Blog = () => {
    return(
        <div className="Blog">
            <Navbar/>
            <Header/>
            <BlogList/>
            <Footer/>
        </div>
       

    );
}

export default Blog;