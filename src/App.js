import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: '',
      output: ''
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }


  ourAlgorithm(){




    
  }

  submitToAlgorithm(e) {
    e.preventDefault();
    let formInput = this.state.value
    // ourAlgorithm(formInput)

    this.setState({
      output: formInput
    })
  }

  render() {
    let answer = <p>{this.state.output}</p>

    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={(e) => this.submitToAlgorithm(e)}>
            <label>Form</label>
            <input type='textbox' value={this.state.value} onChange={(e) => this.handleChange(e)} />
            <button type='submit'>Run Super awesome algorithm</button>
          </form>
          {answer}
        </header>
      </div>
    );
  }

}
export default App;
