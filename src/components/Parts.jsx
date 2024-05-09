// Parts.jsx
import React, { useState } from "react";
const Parts = () => {
  const chain = [
    {
      id: 1,
      name: "ROLON Chain Sprocket Kit(For Honda CBR 250R)",
      price: "$12",
      image: "/images/cs1.webp",
    },
    {
      id: 2,
      name: "ROLON Chain Sprocket Kit(For TVS A[ache RTR 180CC] )",
      price: "$12",
      image: "/images/cs2.webp",
    },
    {
      id: 3,
      name: "ROLON Chain Sprocket Kit for Bajaj Pulser 150 NS/160NS(4Hole| 42T-15T-122L] )",
      price: "$12",
      image: "/images/cs3.webp",
    },
    {
      id: 4,
      name: "Gear Lever for TVS Apache RTR 160 | RTR 180 | Gear Pedal",
      price: "$4",
      image: "/images/cs4.webp",
    },
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
      <h1 className="mb-4">Spare Parts</h1>

      <section className="mb-5">
        {/* <h2 className="mb-3">Gloves</h2> */}
        <div className="row">
          {chain.map((product, index) => (
            <div key={product.id} className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 border-0">
                <img
                  src={product.image}
                  className="card-img-top helmet-image"
                  alt={product.name}
                />
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
};

export default Parts;
