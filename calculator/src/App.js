import { Component } from 'react';
import './App.css';
import Display from './Components/Display';
import PanelButton from './Components/PanelButton';
import Operations from './Logic/Operations';

class App extends Component {
  state = {
    total: null,
    next: null,
    operator: null,
    percentageResult: null
  }

  handleClick = nameButton => this.setState(Operations(this.state, nameButton));

  render() {
    const next = this.state.next;
    return (
        <div className='component-calculator'>
            <div className='container-calculator'>
                {next && typeof next === "object" ? (
                    <div className={next.className}>{next.message}</div>
                ) : (
                    <Display value={next || this.state.total || this.state.percentageResult || "0"} />
                )}
                <PanelButton clickHandle={this.handleClick} />
            </div>
        </div>
    );
  }

}

export default App;
