import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function RestaurentPage() {
  const { cart, removeCart } = useContext(CartContext);
  return (
    <div>
        <h2>Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <h5>{item.name}</h5>
          <button onClick={() => removeCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default RestaurentPage;
