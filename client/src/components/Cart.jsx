// import React from "react";

// const Cart = ({ cartItems }) => {
//   return (
//     <div className="container py-5">
//       <h1 className="mb-4">Cart</h1>

//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           {cartItems.map((item) => (
//             <div key={item.id} className="card mb-3">
//               <div className="row g-0">
//                 <div className="col-md-4">
//                   <img
//                     src={item.image}
//                     className="img-fluid rounded-start"
//                     alt={item.name}
//                   />
//                 </div>
//                 <div className="col-md-8">
//                   <div className="card-body">
//                     <h5 className="card-title">{item.name}</h5>
//                     <p className="card-text">{item.price}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//           <button className="btn btn-primary">Checkout</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
