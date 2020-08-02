import React, { Component } from "react";
import Cart from "./Cart";
import Store from "./store";
class Body extends Component {
  state = {
    items: [
      { name: "Bread", price: 5.0 },
      { name: "Milk", price: 2.78 },
      { name: "Eggs", price: 1.78 },
    ],
    cart: [{ name: "test", price: 15 }],
  };
  HandleAddToCart = () => {
    console.log("add to cart:");
  };
  HandleRemoveItem = () => {
    console.log("remove item");
  };
  HandleClearCart = () => {
    console.log("clearing cart");
    this.setState({ cart: [] });
  };
  render() {
    return (
      <div className="container-fluid bg-light flex-grow-1">
        <div className="row">
          <div className="col-12 bg-primary">
            <p className="m-0 p-1">Here is the body section</p>
          </div>
        </div>
        <div className="row">
          <Store
            RaiseAddToCart={this.HandleAddToCart}
            items={this.state.items}
          />
          <Cart
            cartItems={this.state.cart}
            RaiseClearCart={() => this.HandleClearCart()}
            RaiseRemoveItem={() => this.HandleRemoveItem()}
          />
        </div>
      </div>
    );
  }
}

export default Body;
