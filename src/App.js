import React, { Component } from "react"
import "./App.css"
import List from "./List.js"
import axios from "axios"

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
				"https://one-list-api.herokuapp.com/items?access_token=illustriousvoyage"
			)
			.then(response => {
				console.log(response.data)
				this.setState({ items: response.data })
			})
	}
	completeItem = id => {
		axios
			.put(
				`https://one-list-api.herokuapp.com/items/${id}?access_token=illustriousvoyage`,
				{
					item: {
						complete: true
					}
				}
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
					<p> My header</p>
					<button>+ </button>
				</header>
				<List items={this.state.items} completeItem={this.completeItem} />
				<footer>my footer</footer>
			</div>
		)
	}
}

export default App
