import { Component } from 'react';
import './App.css';
import Display from './Components/Display';

class App extends Component {
  state = {
    total: null,
    next: null,
    operator: null
  }

  render() {
    return (
      <div>
        <h1>prueba</h1>
        <Display value={this.state.next || this.state.total || "0"} />
      </div>
    );
  }

}

export default App;
