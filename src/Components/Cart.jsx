import React, { Component } from "react";
import Item from "./Item";
class Cart extends Component {
  render() {
    let itemsToRender = [];
    let total = 0;
    this.props.cartItems.forEach((elem) => {
      total += elem.price;
      itemsToRender.push(
        <li>
          <Item name={elem.name} price={elem.price}></Item>
          <button
            onClick={this.props.RaiseRemoveItem}
            className="btn btn-warning "
          >
            Remove
          </button>
        </li>
      );
    });

    return (
      <div className="col-6 bg-secondary text-light rounded p-2 shadow">
        <h4>Cart</h4>
        <ul>{itemsToRender}</ul>
        <button
          onClick={this.props.RaiseClearCart}
          className="btn btn-danger m-2"
        >
          Clear cart
        </button>
      </div>
    );
  }
}

export default Cart;
