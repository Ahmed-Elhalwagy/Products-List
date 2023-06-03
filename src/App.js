import "./App.css";
import React, { Component } from "react";
import Items from "./components/item/items";
import AddItem from "./components/addItem/addItem";
import Total from "./components/total/total";
import Swal from "sweetalert2";

class App extends Component {
  state = {
    items: [
      { id: 1, product: "Pen", price: 2, quantity: 1 },
      { id: 2, product: "Book", price: 10, quantity: 1 },
    ],
  };

  deleteItem = (id) => {
    let items = this.state.items;
    let i = items.findIndex((item) => item.id === id);
    Swal.fire({
      title: "delete",
      icon: "question",
      text: "Are you sure you want to Delete this item",
      confirmButtonText: "Confirm",
      confirmButtonColor: "red",
      cancelButtonText: "Cancel",
      showCancelButton: true,
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        items.splice(i, 1);
        this.setState({ items: items });
      } else {
        return;
      }
    });
  };

  addItem = (item) => {
    this.state.items.length > 0
      ? (item.id = this.state.items[this.state.items.length - 1].id + 1)
      : (item.id = 1);
    console.log(item.id);
    item.quantity = 1;
    let items = this.state.items;
    items.push(item);
    this.setState({ items: items });
  };

  inc = (item) => {
    const i = this.state.items.find((el) => el.id === item.id);
    i.quantity++;
    this.setState({ ...this.state.items, i });
    console.log(i);
  };
  dec = (item) => {
    console.log(item);
    if (item.quantity !== 1) {
      const i = this.state.items.find((el) => el.id === item.id);
      i.quantity--;
      this.setState({ ...this.state.items, i });
      console.log(i);
    } else {
      Swal.fire({
        icon: "error",
        title: "Unvalid Number",
        text: "You can't decrease the quantity to less than 1",
        footer: "You can remove the item from the delete button",
        confirmButtonText: "Continue",
        confirmButtonColor: "#0cb90c",
      });
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Product List React App</h1>
        <div className="table">
          <Items
            items={this.state.items}
            del={this.deleteItem}
            inc={this.inc}
            dec={this.dec}
          />
          <AddItem add={this.addItem} />
          <Total items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default App;
