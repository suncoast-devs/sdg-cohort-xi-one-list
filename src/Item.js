import React, { Component } from "react"

class Item extends Component {
	completeItem = event => {
		this.props.completeItem(this.props.id)
	}
	render() {
		let className = ""
		if (this.props.complete) {
			className = "complete"
		}

		let checked = ""
		if (this.props.complete) {
			checked = "checked"
		}
		return (
			<li key={this.props.id} className={className}>
				<input type="checkbox" checked={checked} onChange={this.completeItem} />
				{this.props.text} <button>edit</button>
				<button>delete</button>
			</li>
		)
	}
}

export default Item
