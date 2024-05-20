import { useTransition } from "react";
import { useFetch } from './../hooks/useFetch';
import { getAllCartProducts, removeFromCart } from "../services/cart";
import { useNavigate } from 'react-router-dom';

const Cart = () => {


  const {data, isLoading} = useFetch(getAllCartProducts);
  const [isDeleting, startTransition] = useTransition();
  const navigate = useNavigate();

  if(isLoading) return <div>loading...</div>

    // Function to calculate total price
  const calculateTotalPrice = () => {
    return data.reduce((total, item) => total + (parseFloat(item.product.price)), 0).toFixed(2);
  };

  const onDelete = (id) => {
    startTransition(async () => {
      try {
        await removeFromCart(id);
        navigate(0)
        alert("product removed from cart");
      } catch (error) {
        alert(error.message)
      }
    })
  }


  return (
    <div className="container py-5">
      <h1 className="mb-4">Cart</h1>

      {data.length === 0 ? (
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
            {data.map(({id, product, quantity}) => (
              <tr key={id}>
                <td><img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} /></td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
               {quantity}
                </td>
                <td>${(parseFloat(product.price) * quantity).toFixed(2)}</td>
                <td><button className="btn btn-danger btn-sm" onClick={() => onDelete(id)} disabled={isDeleting}>Remove</button></td>
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
