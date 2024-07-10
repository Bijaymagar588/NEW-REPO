import React from "react";
import Header from "../components/Homepage/Header";
import Footer from "../components/Homepage/Footer";
import Hero from "../components/Services/Hero";
import Serviceitems from "../components/Services/Serviceitems";

const Services= () => {
  return (
    <main className="text-white">
      <Header />
      
        <Hero />
        <Serviceitems />
 
     
      < Footer/>
    </main>
  );
};

export default Services;
