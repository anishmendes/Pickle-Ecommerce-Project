// import React from 'react'
// import { useCartContext } from '../context/CartContext';


// const Cart = () => {
//   const { cart, dispatch } = useCartContext();

//   const increaseQuantity = (id) => {
//       dispatch({ type: 'INCREASE_QUANTITY', payload: { id } });
//   };

//   const decreaseQuantity = (id) => {
//       dispatch({ type: 'DECREASE_QUANTITY', payload: { id } });
//   };

//   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//       <div className="cart-page">
//           <h2>Your Cart</h2>
//           {cart.map(item => (
//               <div key={item.id} className="cart-item">
//                   <img src={item.img} alt={item.desc} />
//                   <h2>{item.desc}</h2>
//                   <p>${item.price}</p>
//                   <div className="quantity-controls">
//                       <button onClick={() => decreaseQuantity(item.id)}>-</button>
//                       <span>{item.quantity}</span>
//                       <button onClick={() => increaseQuantity(item.id)}>+</button>
//                   </div>
//               </div>
//           ))}
//           <h2>Total: ${total.toFixed(2)}</h2>
//       </div>
//   );
// }

// export default Cart;

