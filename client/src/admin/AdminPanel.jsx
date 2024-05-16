import React, { useState } from "react";

const AdminPanel = () => {
  const [products, setProducts] = useState([]);

  // Function to add a new product
  const addProduct = () => {
    // Implement functionality to add a new product
  };

  // Function to edit a product
  const editProduct = (id) => {
    // Implement functionality to edit a product
  };

  // Function to delete a product
  const deleteProduct = (id) => {
    // Implement functionality to delete a product
  };

  // Function to approve a product
  const approveProduct = (id) => {
    // Implement functionality to approve a product
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4">Admin Panel</h1>

      {/* Table to display products */}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>
                <button className="btn btn-primary mr-2" onClick={() => editProduct(product.id)}>Edit</button>
                <button className="btn btn-danger mr-2" onClick={() => deleteProduct(product.id)}>Delete</button>
                <button className="btn btn-success" onClick={() => approveProduct(product.id)}>Approve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Button to add a new product */}
      <button className="btn btn-primary" onClick={addProduct}>Add Product</button>
    </div>
  );
};

export default AdminPanel;
