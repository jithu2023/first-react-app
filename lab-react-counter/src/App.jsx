import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  increase = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  decrease = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };

  reset = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    return (
      <>
        <h1>Counter App</h1>
        {this.state.counter}

        <br />
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
        <button onClick={this.reset}>Reset</button>
      </>
    );
  }
}

export default App;
