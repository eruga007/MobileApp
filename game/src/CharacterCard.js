import React, { Component } from 'react';
import './App.css';


class CharacterCard extends Component {
  state = {
    activated: false,
  }
  handleClick = () => {
    if (this.state.activated === false) {
      this.setState({ activated: true })
    }
    else {
      this.setState({ activated: false })
    }


  }
  render() {
    return (
      <div onClick={this.handleClick} style={{ color: this.state.activated ? 'red' : 'green', textAlign: 'center' }}>
        <h1>{this.props.value}</h1>
      </div>
    );
  }
}

export default CharacterCard;
