import React, { Component } from 'react'
import Item from './Item'
class List extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => {
          return (
            <Item
              key={item.id}
              id={item.id}
              text={item.text}
              complete={item.complete}
              completeItem={this.props.completeItem}
              deleteItem={this.props.deleteItem}
              changeItemText={this.props.changeItemText}
            />
          )
        })}
      </ul>
    )
  }
}

export default List
