import React, { Component } from "react"

class List extends Component {
  state = {}

  renderItem=(item)=>{
    let className=""
    if (item.complete){
      className="complete"
    }

    let checked=""
    if(item.complete){
      checked="checked"
    }
    return(
      <li key={item.id} className={className}>
        <input type="checkbox" checked={checked} />
        {item.text} <button>edit</button>
        <button>delete</button>
      </li>
    )
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
