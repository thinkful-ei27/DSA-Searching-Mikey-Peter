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

  handleBinaryRecursion(sortedList, item, start, end, ticks = 1) {
    console.log(ticks);
    
    start = start === undefined ? 0 : start;
    end = end === undefined ? sortedList.length : end;
    if (start > end) return -1;
    const index = Math.floor((start + end) / 2);
    const tempItem = sortedList[index];
    if (tempItem === item) {
      return [index, ticks];
    }
    else if (tempItem < item) {
      return this.handleBinaryRecursion(sortedList, item, index + 1, end, ticks + 1 )
    }
    else if (tempItem > item) {
      return this.handleBinaryRecursion(sortedList, item, start,  index - 1, ticks + 1)
    }
  }


  binarySearch(list, item) {
    const listArr = list.split(' ');
    const sortedList = listArr.sort((a, b) => a - b)
    const result = this.handleBinaryRecursion(sortedList, item);
    const [index, ticks] = result;
    if (index === -1) {
      return 'The item was not found';
    }
    return `The binary result is ${listArr[index]}. It took ${ticks} times to find it`;
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
    e.target.children.myItem.value = '';
    let list = this.state.list;
    let item = this.state.item;


    let linearAnswer = this.linearSearch(list, item);


    const binaryAnswer = this.binarySearch(list, item);
    console.log(binaryAnswer);
    


    let [result, counter] = linearAnswer
    let linearOutputString;

    if (!result) {
      linearOutputString = `Did not find requested input item in list after ${counter} times`;

    }
    else {
      linearOutputString = `The linear result is ${result}. It took ${counter} times to find it`;
    }



    this.setState({
      linearOutput: linearOutputString,
      binaryOutput: binaryAnswer,
      list: '',
      item: ''
    });
  }

  render() {
    let answer = (<div>
      <p>{this.state.linearOutput}</p>
      <p>{this.state.binaryOutput}</p>
        </div>)


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
