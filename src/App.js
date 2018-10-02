import React, { Component } from 'react'
import axios from 'axios'

import './App.css'
import List from './List.js'
import Footer from './Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }
  getItemsFromApi = () => {
    axios
      .get(
        'https://one-list-api.herokuapp.com/items?access_token=sdg-cohort-xi'
      )
      .then(response => {
        this.setState({ items: response.data.reverse() })
      })
  }

  completeItem = (id, complete) => {
    axios
      .put(
        `https://one-list-api.herokuapp.com/items/${id}?access_token=sdg-cohort-xi`,
        { item: { complete } }
      )
      .then(response => {
        this.getItemsFromApi()
      })
  }

  deleteItem = id => {
    axios
      .delete(
        `https://one-list-api.herokuapp.com/items/${id}?access_token=sdg-cohort-xi`
      )
      .then(response => {
        this.getItemsFromApi()
      })
  }

  changeItemText = (id, text) => {
    axios
      .put(
        `https://one-list-api.herokuapp.com/items/${id}?access_token=sdg-cohort-xi`,
        { item: { text } }
      )
      .then(response => {
        this.getItemsFromApi()
      })
  }

  addItem = () => {
    let text = prompt('What is your new item?')

    axios
      .post(
        `https://one-list-api.herokuapp.com/items?access_token=sdg-cohort-xi`,
        { item: { text } }
      )
      .then(response => {
        this.getItemsFromApi()
      })
  }

  componentDidMount = () => {
    this.getItemsFromApi()
  }
  render() {
    return (
      <div className="App">
        <header>
          <p>ONE LIST!</p>
          <button onClick={this.addItem}>+ </button>
        </header>
        <List
          items={this.state.items}
          completeItem={this.completeItem}
          deleteItem={this.deleteItem}
          changeItemText={this.changeItemText}
        />
        <Footer />
      </div>
    )
  }
}

export default App
