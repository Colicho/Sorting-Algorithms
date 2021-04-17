import React from "react"
import './App.css';
import Main from "./components/main"
import Header from "./components/header"


class App extends React.Component{
  constructor(){
    super()

  }
  render(){
    return(
      <div className="page">
        <noscript>Your browser doesn't support or has disabled javascripts</noscript>
        <Main />
        <Header />
      </div>
    )
  }
}

export default App;
