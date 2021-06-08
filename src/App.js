import React from "react"
import './App.css';
import Main from "./components/main"
import Header from "./components/header"
import selectionSort from "./sortAlgos/selectionsort"
import bubbleSort from "./sortAlgos/bubblesort"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
        currentSortText: "Select sorting algorithm",
        currentSort: "Choose a sorting algorithm!",
        size: 50,
        speed: 50,
        listData: [33],
      }
      this.chooseSort = this.chooseSort.bind(this)
      this.size = this.size.bind(this)
      this.speed = this.speed.bind(this)
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

  size(){
      let i = document.getElementById("sizeSlider")
      this.setState({
          size: i.value,
      });
      if (typeof(this.state.currentSort) !== 'string'){
      let list = []
        for(let i = 0; i < this.state.size; i++){
            list.push(Math.floor(Math.random() * 100) + 1)
        }
        this.state.listData = this.state.currentSort(list)
      }
  }

  speed(){
      let i = document.getElementById("speedSlider")
      this.setState({
          speed: i.value,
      })
  }

  render(){
    return(
      <div className="page">
        <noscript>Your browser doesn't support or has disabled javascripts</noscript>
        <Main size={this.state.size} speed={this.state.speed} listData={this.state.listData}/>
        <Header sortText={this.state.currentSortText} sort={this.chooseSort} size={this.size} speed={this.speed}/>
      </div>
    )
  }
}

export default App;
