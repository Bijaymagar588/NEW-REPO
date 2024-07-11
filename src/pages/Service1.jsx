import React from "react";
import Header from "../components/Homepage/Header";
import Footer from "../components/Homepage/Footer";
import Hero from "../components/Services/Hero1";
import Serviceitems from "../components/Services/Serviceitems";

const Service1 = () => {
  return (
    <main className="text-white">
      <Header />

      <Hero />
      <Serviceitems />

      <Footer />
    </main>
  );
};

export default Service1;
