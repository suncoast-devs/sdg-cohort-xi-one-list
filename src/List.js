import React, { Component } from "react"
import Item from "./Item"
class List extends Component {
  state = {}

  renderItem=(item)=>{
    
    return(
      <Item id={item.id} text={item.text} complete={item.complete} completeItem={this.props.completeItem}>
      </Item>)
    
  }
  
  render() {
    console.log(this.props.items)
    return (
      <ul>
        {
          this.props.items.map(item=>{
            return this.renderItem(item)
          })
        }
      </ul>
    )
  }
}

export default List
