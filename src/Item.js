import React, { Component } from 'react'

class Item extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: this.props.text,
      editing: false
    }
  }

  componentWillReceiveProps = props => {
    this.setState({ editing: false })
  }

  completeItem = event => {
    let newCompleteStatus = event.target.checked

    this.props.completeItem(this.props.id, newCompleteStatus)
  }

  deleteItem = event => {
    this.props.deleteItem(this.props.id)
  }

  changeText = event => {
    this.setState({ text: event.target.value })
  }

  keyUp = event => {
    if (event.keyCode === 13) {
      this.props.changeItemText(this.props.id, this.state.text)
    }
  }

  blur = event => {
    this.props.changeItemText(this.props.id, this.state.text)
  }

  setEditing = event => {
    if (this.props.complete) {
      return
    }

    this.setState({ editing: !this.state.editing })
  }

  render() {
    let className = ''
    if (this.props.complete) {
      className = 'complete'
    }

    let checked = ''
    if (this.props.complete) {
      checked = 'checked'
    }

    const plainText = this.state.editing ? null : (
      <span onClick={this.setEditing}>{this.props.text}</span>
    )
    const input = this.state.editing ? (
      <input
        type="text"
        value={this.state.text}
        onChange={this.changeText}
        onKeyUp={this.keyUp}
        onBlur={this.blur}
      />
    ) : null

    return (
      <li key={this.props.id} className={className}>
        <input type="checkbox" checked={checked} onChange={this.completeItem} />
        {plainText}
        {input}
        <button onClick={this.deleteItem}>delete</button>
      </li>
    )
  }
}

export default Item
