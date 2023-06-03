import React from "react";

const Items = (props) => {
  const { items, del, inc, dec } = props;
  let length = items.length;
  const ListItem = length ? (
    items.map((item) => {
      return (
        <div key={item.id} className="item">
          <p className="col">{item.product}</p>
          <p className="col">{item.price}</p>
          <p className="col">{item.quantity}</p>
          <div className="edit-btns col">
            <p className="btn inc" onClick={() => inc(item)}>
              +
            </p>
            <p className="btn dec" onClick={() => dec(item)}>
              -
            </p>
            <p className="btn delete" onClick={() => del(item.id)}>
              &times;
            </p>
          </div>
        </div>
      );
    })
  ) : (
    <div className="text">There are no items, Try to add some.</div>
  );
  return (
    <div>
      <div className="header item">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Edit</p>
      </div>
      {ListItem}
    </div>
  );
};

export default Items;
