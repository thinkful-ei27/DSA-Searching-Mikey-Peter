import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: '',
      item: '',
      linearOutput: '',
      binaryOutput: ''
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

  handleBinaryRecursion(sortedList, item, start, end) {
    start = start === undefined ? 0 : start;
    end = end === undefined ? sortedList.length : end;
    if (start > end) return -1;
    const index = Math.floor((start + end) / 2);
    const tempItem = sortedList[index];
    item === tempItem ?
  }


  binarySearch(list, item) {
    const listArr = list.split(' ');
    const sortedList = listArr.sort((a, b) => a - b)
    const result = this.handleBinaryRecursion(sortedList, item)
    return result;
  }


  linearSearch(list, item) {
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


    let linearAnswer = this.linearSearch(list, item);


    const binaryAnswer = this.binarySearch(list, item);


    let [result, counter] = linearAnswer
    let linearOutputString;

    if (!result) {
      linearOutputString = `Did not find requested input item in list after ${counter} times`;

    }
    else {
      linearOutputString = `The result is ${result}. It took ${counter} times to find it`
    }



    this.setState({
      linearOutput: linearOutputString,
      binaryOutput: '',
      list: '',
      item: ''
    });
  }

  render() {
    let answer = <p>{this.state.linearOutput}</p>


    return (
      <div className="App">
        <header className="App-header">

          <form onSubmit={(e) => this.submitToAlgorithm(e)}>
            <label htmlFor="list">Data Set:</label>
            <input type="text" name="list" onChange={(e) => this.handleListChange(e)} />
            <label htmlFor="item">Item To Search For:</label>
            <input type='text' name="myItem" onChange={(e) => this.handleItemChange(e)} />
            <button name='linear' type='submit'>Run Amesome Linear algorithm</button>
          </form>
          {answer}
        </header>
      </div>
    );
  }

}
export default App;
