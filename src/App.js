import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import List from "./List.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <p> My header</p>
          <button>+ </button>
        </header>
        <List />
        <footer>my footer</footer>
      </div>
    )
  }
}

export default App
