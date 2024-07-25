import { Component } from "react";
import "./index.css";

class Counter extends Component {
  state = {
    count: 0,
  };

  onIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  onDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };
  render() {
    const { count } = this.state;
    return (
      <div className="counter-container">
        <h1 className="count-heading">Counter</h1>
        <p className="count">{count}</p>
        <div className="buttons-container">
          <button className="button" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrease
          </button>
        </div>
      </div>
    );
  }
}
export default Counter;
