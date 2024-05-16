import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import FAQs from "./components/FAQs";
import ContactUs from "./components/ContactUs";
import Helmet from "./components/Helmet";
import Gears from "./components/Gears";
import Accessories from "./components/Accessories";
import Tyres from "./components/Tyres";
import Parts from "./components/Parts";
import Cart from "./components/Cart";
import { getCurrentUser } from "./services/user";
import { useDispatch } from "react-redux";
import { setUser } from "./store/userSlice";
import AdminPanel from "./admin/AdminPanel";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  // Sample cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Sample Item 1",
      price: "$10",
      image: "/images/sample-item1.jpg",
      quantity: 2, // Add quantity property
    },
    {
      id: 2,
      name: "Sample Item 2",
      price: "$15",
      image: "/images/sample-item2.jpg",
      quantity: 1,
    },
  ]);

  // Function to add quantity to an item in the cart
  const addQuantity = (itemId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to remove quantity from an item in the cart
  const removeQuantity = (itemId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Function to remove item from the cart
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user = await getCurrentUser();
        dispatch(setUser(user));
      } catch (error) {
        console.error("Error fetching current user:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrentUser();
  }, [dispatch]);

  if (isLoading) return <p>Loading....</p>;

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
        
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                addQuantity={addQuantity}
                removeQuantity={removeQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />

          <Route path="/admin" element={<AdminPanel />} />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
