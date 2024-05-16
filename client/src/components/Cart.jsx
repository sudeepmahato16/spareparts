import React from "react";

const Cart = ({ cartItems, addQuantity, removeQuantity, removeFromCart }) => {
  // Function to calculate total price
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4">Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td><img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} /></td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button className="btn btn-secondary btn-sm" onClick={() => removeQuantity(item.id)}>-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button className="btn btn-secondary btn-sm" onClick={() => addQuantity(item.id)}>+</button>
                </td>
                <td>${(parseFloat(item.price) * item.quantity).toFixed(2)}</td>
                <td><button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button></td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" className="text-right"><strong>Total:</strong></td>
              <td>${calculateTotalPrice()}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default Cart;
