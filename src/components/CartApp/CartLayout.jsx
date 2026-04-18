import React from "react";
import Header from "./Header";
import FoodItem from "./FoodItem";
import RestaurentPage from "./RestaurentPage";

function CartLayout() {
  const items = [
    { id: 1, name: "Burger" },
    { id: 2, name: "Pizza" },
  ];

  return (
    <div>
      <Header />
      <hr />
      <h3>Menu</h3>
      {items.map((item) => (
        <FoodItem key={item.id} item={item} />
      ))}
      <hr />
      <RestaurentPage />
    </div>
  );
}

export default CartLayout;
