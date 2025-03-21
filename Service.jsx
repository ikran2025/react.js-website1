import React from "react";
import Navbar from "/../componets/Navbar";
function Service() {
    return (
   <>
      <Navbar/>
      <div className="p-10">
        <h1 className="text-3xl font-bold">Our Services</h1>
        <section className="mt-4">What We Offer</section>
        <section className="mt-4">Pricing</section>
        <section className="mt-4">FAQs</section>
      </div>
      </>
    );
  }
 
  export default Service;