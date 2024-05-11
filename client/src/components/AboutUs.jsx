import React from 'react';

const AboutUs = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 text-center">
          <h2>Welcome To SpareParts Gallery</h2>
          <p className="lead">Your Online Store for auto parts, gears, accessories and services</p>
          <hr className="my-4" />
          <h3>Our Mission:</h3>
          <p>SpareParts Gallery strives to provide our customers with high-quality service by delivering genuine products, accessories, and spare parts for motorcycles.</p>
          <h3>Our Values:</h3>
          <p>We value top-quality service and product delivery and will ensure that you have an amazing online shopping experience with us.</p>
          <p>At SpareParts Gallery, we are committed to:</p>
          <ul className="list-unstyled">
            <li>Offering a wide range of genuine products and accessories for motorcycles.</li>
            <li>Providing exceptional customer service and support.</li>
            <li>Ensuring timely delivery of orders.</li>
            <li>Maintaining transparency and integrity in all our dealings.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
