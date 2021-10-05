import React, { Component } from "react";





class IncrementButton extends Component {
  state = { name: "", increment: 0 };

  state = { name: "", increment: 0 };

handleIncrement = () => {
  this.setState({ increment: this.state.increment + this.state.name.length})
}

  handleIncrement = () => {
    this.setState({ increment: this.state.increment + this.state.name.length });
  };

  handleIncrement = () => {
    this.setState({ increment: this.state.increment + this.state.name.length});
  }

  handleChange = (e) => 
  {this.setState({name: e.target.value})}



  handleChange = (e) => {
    this.setState({ name: e.target.value});
  }
  
  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}> Name Increment </button>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input type="text" value={this.state.increment} />
      </div>
    );
  }
}




export default IncrementButton;

///create a button that increments by the number of characters supplied in string value
