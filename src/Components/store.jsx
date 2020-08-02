import React, { Component } from "react";
class Store extends Component {
  state = {};
  render() {
    let itemsToRender = [];

    this.props.items.forEach((elem) => {
      itemsToRender.push(
        <li>
          {elem.name} {elem.price}
          <button
            onClick={() => this.props.RaiseAddToCart(elem.id)}
            className="btn btn-primary m-2"
          >
            Add
          </button>
        </li>
      );
    });
    return (
      <div className="col-6 ">
        <div className="bg-secondary text-light rounded p-2 shadow">
          <h4>Store</h4>

          <ul>{itemsToRender}</ul>
        </div>
      </div>
    );
  }
}

export default Store;
