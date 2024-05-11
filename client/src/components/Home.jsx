import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const ProductCategory = ({ category, image }) => (
  <div className='product-category-item'>
    <img src={image} alt={category} />
    <p>{category}</p>
  </div>
);

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          alt={`Slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

const Home = () => {
  const categories = [
    { category: 'Helmets', image: '/images/MainHelmet.png' },
    { category: 'Riding Gears', image: '/images/MainGear.png' },
    { category: 'Accessories', image: '/images/MainAccessories.png' },
    { category: 'Auto Parts', image: '/images/MainParts.png' },
    { category: 'Tyres', image: '/images/MainTyres.png' },
  ];

  return (
    <div className="container-fluid mt-0 mb-1">
      {/* Custom Slider */}
      <Slider images={[
        '/images/slide1.jpg',
        '/images/slide2.jpg',
        '/images/slide3.jpg',
        '/images/slide4.jpg',
        '/images/slide5.png',
      ]} />
      
      {/* Product Category Section */}
      <div className='container'>
        <div className='product-category'>
          {categories.map((item, index) => (
            <ProductCategory key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;