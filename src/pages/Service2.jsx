import React from "react";
import Header from "../components/Homepage/Header";
import Footer from "../components/Homepage/Footer";
import Hero from "../components/Services/Hero";
import Serviceitems from "../components/Services/Serviceitems";
import hero2Data from "../data/hero2.json";
import service2Data from "../data/service2.json";

const ServicePage2 = () => {
  return (
    <main className="text-white">
      <Header />
      <Hero
        backgroundImage={require(`../${heroData2.backgroundImage}`).default}
        title={hero2Data.title}
        description={hero2Data.description}
        buttonText={hero2Data.buttonText}
        buttonLink={hero2Data.buttonLink}
      />
      <Serviceitems items={service2Data} />
      <Footer />
    </main>
  );
};

export default ServicePage2;
