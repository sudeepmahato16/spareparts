import React, { useState } from "react";

const Accessories = () => {
  const HelmetCom = [
    {id: 1, name: 'Sena 30K', price: '$285', image: '/images/helcom1.png' },
    {id: 2, name: "Wayxin R15 Pro", price: '$65', image: '/images/helcom2.png' },
    {id: 3, name: 'BSDDP BT Headset ', price: '$15', image: '/images/helcom3.jpg' },
    {id: 4, name: 'Freedconn R1 Plus', price: '$170', image: '/images/helcom4.png' },
  ];
  
  const cleanerProducts = [
    {id: 5, name: 'Liqui Moly Chain Lube', price: '$9', image: '/images/cleaner1.png' },
    {id: 6, name: 'Mr. Thompson Instant Shine 100ml', price: '$2', image: '/images/cleaner2.png' },
    {id: 7, name: 'Formula 1 Fast Wax', price: '$10', image: '/images/cleaner3.png' },
    {id: 8, name: 'Vista Antibac Interiors', price: '$10', image: '/images/cleaner4.png' },
    {id: 9, name: 'Microfiber Cleaning Gloves', price: '$3', image: '/images/cleaner5.png' },
    {id: 10, name: 'Microfiber Towel', price: '$2', image: '/images/cleaner6.png' },
    
  ];
  const Oils = [
    {id: 11, name: 'MOTUL 10W40 300V', price: '$25', image: '/images/oil1.png' },
    {id: 12, name: "Liqui Moly Engine Flush", price: '$5', image: '/images/oil2.png' },
    {id: 13, name: 'Liqui Moly Motorbike MoS2 shooter ', price: '$5', image: '/images/oil3.png' },
    {id: 14, name: 'Liqui Moly Street Race 10W 50 4L ', price: '$72', image: '/images/oil4.png' },
  ];

  const [clickedItems, setClickedItems] = useState([]);

  const isItemInCart = (id) => {
    return clickedItems.includes(id);
  };

  const addToCart = (id) => {
    if (!isItemInCart(id)) {
      setClickedItems([...clickedItems, id]);
    }
  };


  return (
    <div className="container py-5">
      <h1 className="mb-4">Accessories</h1>

      <section className="mb-5">
        <h2 className="mb-3">Helmet InterCom</h2>
        <div className="row">
          {HelmetCom.map((product, index) => (
            <div key={product.id} className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 border-0">
                <img src={product.image} className="card-img-top helmet-image" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <a
                    onClick={() => {
                      addToCart(product.id);
                    }}
                    className="btn btn-primary btn-sm">
                    {isItemInCart(product.id) ? "Added to cart" : "Add to cart"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3">Cleaners</h2>
        <div className="row">
          {cleanerProducts.map((product, index) => (
            <div key={product.id} className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 border-0">
                <img src={product.image} className="card-img-top helmet-image" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <a
                    onClick={() => {
                      addToCart(product.id);
                    }}
                    className="btn btn-primary btn-sm">
                    {isItemInCart(product.id) ? "Added to cart" : "Add to cart"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3">Oils & Additives</h2>
        <div className="row">
          {Oils.map((product, index) => (
            <div key={product.id} className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 border-0">
                <img src={product.image} className="card-img-top helmet-image" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <a
                    onClick={() => {
                      addToCart(product.id);
                    }}
                    className="btn btn-primary btn-sm">
                    {isItemInCart(product.id) ? "Added to cart" : "Add to cart"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Accessories;
