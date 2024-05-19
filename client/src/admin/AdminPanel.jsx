import React, { useEffect, useState } from "react";
import {
  getProducts,
  addProduct as uploadProduct,
  deleteProduct as delProduct,
} from "../services/product";

const AdminPanel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const products = await getProducts({});
      if (products) setProducts(products);
    };

    fetch();
  }, []);

  // Function to add a new product
  const addProduct = async () => {
    // Implement functionality to add a new product

    const product = await uploadProduct({
      name: "test",
      price: 45,
      category: "helmet",
      image: "lsjfls",
    });
    console.log(product);

    setProducts((prev) => [product, ...prev]);
  };

  // Function to edit a product
  const editProduct = (id) => {
    // Implement functionality to edit a product
  };

  // Function to delete a product
  const deleteProduct = async (id) => {
    // Implement functionality to delete a product

    await delProduct(id);

    setProducts((prev) => prev.filter((i) => i.id !== id));
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
                <button
                  className="btn btn-primary mr-2"
                  onClick={() => editProduct(product.id)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger mr-2"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => approveProduct(product.id)}
                >
                  Approve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Button to add a new product */}
      <button className="btn btn-primary" onClick={addProduct}>
        Add Product
      </button>
    </div>
  );
};

export default AdminPanel;
