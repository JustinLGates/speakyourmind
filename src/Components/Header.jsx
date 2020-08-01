import React, { Component } from "react";
class NavigationBar extends Component {
  state = {
    count: 0,
    imgUrl: "https://picsum.photos/200",
    tags: [],
  };
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <img src={this.state.imgUrl} alt="" />
        <span className={this.getBadgeClasses()}> {this.formatcount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 2 })}
          className="btn btn-primary btn-sm p-2"
        >
          Submit..
        </button>
        {this.renderTags()}
      </div>
    );
  }
  handleIncrement = (id) => {
    console.log(id);
    this.setState({ count: this.state.count + 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>nothing</p>;
    }
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}> {tag}</li>
        ))}
      </ul>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? " bg-warning" : " bg-primary";
    return classes;
  }

  formatcount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default NavigationBar;
