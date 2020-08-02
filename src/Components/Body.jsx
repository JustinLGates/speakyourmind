import React, { Component } from "react";
import Cart from "./Cart";
import Store from "./store";
class Body extends Component {
  state = {
    items: [
      { id: 0, name: "Bread", price: 5.0 },
      { id: 1, name: "Milk", price: 2.78 },
      { id: 2, name: "Eggs", price: 1.78 },
    ],
    cart: [{ id: 3, name: "test", price: 15 }],
  };
  HandleAddToCart = (itemId) => {
    console.log("add to cart: " + itemId);

    let cart = this.state.cart;
    let itemToAdd = this.state.items.find((elem) => elem.id == itemId);
    cart.push(itemToAdd);
    this.setState({ cart });
  };
  HandleRemoveItem = (id) => {
    let cart = this.state.cart;
    cart = cart.filter((elem) => elem.id != id);
    this.setState({ cart });
  };
  HandleClearCart = () => {
    console.log("clearing cart");
    this.setState({ cart: [] });
  };
  render() {
    return (
      <div className="container-fluid bg-secondary flex-grow-1">
        <div className="row">
          <div className="col-12 bg-light"></div>
        </div>
        <div className="row p-3 m-2">
          <Store
            RaiseAddToCart={this.HandleAddToCart}
            items={this.state.items}
          />
          <Cart
            cartItems={this.state.cart}
            RaiseClearCart={() => this.HandleClearCart()}
            RaiseRemoveItem={this.HandleRemoveItem}
          />
        </div>
      </div>
    );
  }
}

export default Body;
