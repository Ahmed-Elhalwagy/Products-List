import React from "react";

const Total = (props) => {
  const { items } = props;
  let total = 0;
  console.log(items);
  items.forEach((item) => {
    total += item.quantity * item.price;
  });

  return (
    <div>
      <p className="text">Total Price: {total}</p>
    </div>
  );
};

export default Total;
