import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: '',
      item: '',
      output: ''
    }
  }

  handleListChange(e) {
    this.setState({
      list: e.target.value
    })
  }

  handleItemChange(e) {
    this.setState({
      item: e.target.value
    })
  }


  linearSearch(list, item){
    const listArr = list.split(' ')
    let counter = 0;
    const result = listArr.find((listItem) => {
      counter++;
      return listItem === item;
    });
    return [result, counter];
    
  }

  submitToAlgorithm(e) {
    e.preventDefault();
    e.target.children.list.value = '';
    e.target.children.myItem.value = ''
    let list = this.state.list;
    let item = this.state.item;
    let answer = this.linearSearch(list, item);
    let [result, counter] = answer

    this.setState({
      output: `The result is ${result}. It took ${counter} times to find it`,
      list: '',
      item: ''
    });
  }

  render() {
    let answer = <p>{this.state.output}</p>

    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={(e) => this.submitToAlgorithm(e)}>
            <label htmlFor="list">Data Set:</label>            
            <input type="text" name="list" onChange={(e) => this.handleListChange(e)} />
            <label htmlFor="item">Item To Search For:</label>
            <input type='text' name="myItem" onChange={(e) => this.handleItemChange(e)}/> 
            <button type='submit'>Run Super awesome algorithm</button>
          </form>
          {answer}
        </header>
      </div>
    );
  }

}
export default App;
