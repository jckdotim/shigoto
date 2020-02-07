import React, { Component } from 'react';
import './App.css';

class Item extends Component {
  render = function() {
    return <li><input type="checkbox"/>Restructure base</li>
  }
}

function App() {
  return (
    <div className="App">
      <h1>TODO</h1>
      <section>
      <ul>
        <Item checked="false" body="Restructure base" />
      </ul>
      </section>
    </div>
  );
}

export default App;
