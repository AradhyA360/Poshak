import { useState } from "react";

import "./App.css";
import Header from "./sections/Header";
import PopularProducts from "./sections/PopularProducts";
import Navigation from "./sections/Navigation";
import BankOffers from "./sections/BankOffers";
import NewFavourites from "./sections/NewFavourites";
import WhatsNew from "./sections/WhatsNew";
import Deals from "./sections/Deals";
import Features from "./sections/Features";
import WhyPoshak from "./sections/WhyPoshak";
import Testimonials from "./sections/Testimonials";
import FAQs from "./sections/FAQs";
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <PopularProducts />
      <Navigation />
      <BankOffers />
      <NewFavourites />
      <WhatsNew />
      <Deals />
      <Features />
      <WhyPoshak />
      <Testimonials />
      <FAQs />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
