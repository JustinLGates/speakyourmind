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
            onClick={this.props.RaiseAddToCart}
            className="btn btn-primary m-2"
          >
            Add
          </button>
        </li>
      );
    });
    return (
      <div className="col-6 bg-secondary text-light p-2 shadow rounded">
        <h4>Store</h4>

        <ul>{itemsToRender}</ul>
      </div>
    );
  }
}

export default Store;
