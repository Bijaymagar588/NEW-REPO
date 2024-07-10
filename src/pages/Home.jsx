import React from 'react'
import Header from "../components/Homepage/Header";
import Hero from "../components/Homepage/Hero";
import CartCard from "../components/Homepage/CartCard";
import Footer from '../components/Homepage/Footer';


const Home = () => {
  return (
    <main className="text-white">
      <Header />
      <div className="w-full xl:max-w-[1250px] mx-auto px-4">
        <Hero />
        <CartCard />
      </div>
      
      <Footer />
     
    
    </main>
    

  )
}

export default Home
