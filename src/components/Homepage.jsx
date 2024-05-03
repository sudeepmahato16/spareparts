import React from 'react';

const Homepage = () => {
  return (
 
    
    <div className="container">
      <h1>Welcome to SpareParts.com</h1>
      <p>Find all your bike accessories and spare parts here!</p>
      <p>This is a Home Page</p>
      <h2 className="my-4">Products Lists for Homepage </h2>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <img className="card-img-top" src="https://via.placeholder.com/300" alt="Placeholder" />
            <div className="card-body">
              <h4 className="card-title">Product Name</h4>
              <h5>$19.99</h5>
              <p className="card-text">Product Description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
