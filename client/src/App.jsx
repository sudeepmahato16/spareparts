// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import FAQs from './components/FAQs';
import ContactUs from './components/ContactUs';
import Helmet from './components/Helmet';
import Gears from './components/Gears';
import Accessories from './components/Accessories';
import Tyres from './components/Tyres';
import Parts from './components/Parts';
// import Cart from './components/Cart';



const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/categories/helmets" element={<Helmet />} />
          <Route path="/categories/riding-gears" element={<Gears />} />
          <Route path="/categories/accessories" element={<Accessories />} />
          <Route path="/categories/tyres" element={<Tyres />} />
          <Route path="/categories/parts" element={<Parts />} />
          {/* <Route path="/cart" element={<Cart />} /> */}

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
