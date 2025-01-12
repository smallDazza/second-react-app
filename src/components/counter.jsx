import React, { Component } from "react";

class Counter extends Component {

  render() {
    return (
      //instead if <div>, could use <React.Fragment>
      // className using bootstrap styling
      <div>
        {this.props.children}
        <span style={{ fontSize: 25 }} className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={{ fontSize: 30 }}
          className="btn btn-secondary btn-sm">Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} style={{fontSize: 25}} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }

getBadgeClasses() {
    let classes = "badge text-bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

formatCount() {
    const { count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
