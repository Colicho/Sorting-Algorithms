import React from "react"
import './App.css';
import Main from "./components/main"
import Header from "./components/header"
import selectionSort from "./sortAlgos/quicksort"
import bubbleSort from "./sortAlgos/bubblesort"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
        currentSortText: "Select sorting algorithm",
        currentSort: "Choose a sorting algorithm!"
      }
      this.chooseSort = this.chooseSort.bind(this)
  }

  chooseSort(input){
      let value = input
      switch(value){
          case 'Bubble sort':
              value = bubbleSort
              break
          case 'Selection sort':
              value = selectionSort
              break
      }
      this.setState({
          currentSortText: input,
          currentSort: value
      });
  }

  render(){
    return(
      <div className="page">
        <noscript>Your browser doesn't support or has disabled javascripts</noscript>
        <Main sort={this.state.currentSort}/>
        <Header sort={this.state.currentSortText} sor={this.chooseSort}/>
      </div>
    )
  }
}

export default App;
