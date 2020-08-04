import React, { Component } from "react";
import api from "../Axios";
class Store extends Component {
  componentDidMount() {
    api.get(`test`).then((res) => {
      const data = res.data;
      this.setState({ data });
    });
  }
  state = {};
  render() {
    return (
      <div>
        <p>hi</p>
      </div>
    );
  }
}

export default Store;
