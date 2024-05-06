import React, { useState, useEffect } from 'react';

const ProductCategory = ({ category, image }) => (
  <div className='product-category-item'>
    <img src={image} alt={category} />
    <p>{category}</p>
  </div>
);

const Home = () => {
  const images = [
    'images/slide1.jpg',
    'images/slide2.jpg',
    'images/slide3.jpg',
    'images/slide4.jpg',
    'images/slide5.png',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle sliding
  const slide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Automatically slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(slide, 5000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { category: 'Helmets', image: 'images/MainHelmet.png' },
    { category: 'Riding Gears', image: 'images/MainGear.png' },
    { category: 'Accessories', image: 'images/MainAccessories.png' },
    { category: 'Auto Parts', image: 'images/MainParts.png' },
    { category: 'Tyres', image: 'images/MainTyres.png' },
  ];

  return (
    <div className="container-fluid mt-0 mb-1"> {/* Add top and bottom margin */}
      {/* Carousel */}
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
              <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      {/* Product Category Section */}
      <div className='container'> {/* Add container here */}
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
