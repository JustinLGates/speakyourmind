import React, { Component } from "react";
class Item extends Component {
  state = {};
  render() {
    return (
      <span className="p-2 m-2">
        {this.props.name} {this.props.price}
      </span>
    );
  }
}

export default Item;
