import React, { Component } from "react";
class Header extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid bg-dark text-light">
        <div className="row">
          <div className="col-12">
            <h1>Header</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
