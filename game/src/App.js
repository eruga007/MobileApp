import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';

const word = ['H', 'e', 'l', 'l', 'o']
class App extends Component {
  render() {
    return (
      <div>
        {
          word.map((c, i) => <CharacterCard value={c} key={i} />)
        }
      </div>
    );
  }
}

export default App;
