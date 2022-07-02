import React from "react"
import './App.css';
import Main from "./components/main"
import Header from "./components/header"
import bubbleSort from "./sortalgos/bubblesort"
import insertionSort from "./sortalgos/insertionsort"
import mergeSort from "./sortalgos/mergesort"

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
      this.start = this.start.bind(this)
  }

  chooseSort(input){
      let value = input
      switch(value){
          case 'Bubble sort':
              value = bubbleSort
              break
          case 'Insertion sort':
              value = insertionSort
              break
          case 'Merge sort':
              value = mergeSort
              break
      }
      this.setState({
          currentSortText: input,
          currentSort: value
      });
  }

  size(){
      let j = document.getElementById("sizeSlider").value
      let list = []
      document.getElementById('sort').innerHTML = null
      for(let i = 0; i < j; i++){
          let value = Math.floor(Math.random() * 200) + 1
          list.push(value)
          let square = document.createElement('d');
          square.setAttribute("id", i);
          document.getElementById('sort').appendChild(square)
          document.getElementById(i).style.backgroundColor = 'black'
          document.getElementById(i).style.height = value*2 + "px"
          document.getElementById(i).style.paddingRight = 10 + "px"
          document.getElementById(i).style.marginTop = -20 + "px"
      }
      this.setState({
          listData: list,
          size: j
      });
  }

  speed(){
      let i = document.getElementById("speedSlider").value

      this.setState({
          speed: i
      })
  }

  start(){
      if (typeof(this.state.currentSort) !== 'string'){
          this.state.listData = this.state.currentSort(this.state.listData, 101-this.state.speed)
      }
  }

  render(){
    return(
      <div className="page">
        <noscript>Your browser doesn't support or has disabled javascripts</noscript>
        <Main size={this.state.size} speed={this.state.speed} listData={this.state.listData}/>
        <Header sortText={this.state.currentSortText} sort={this.chooseSort} size={this.size} speed={this.speed} playButton={this.start}/>
      </div>
    )
  }
}

export default App;
