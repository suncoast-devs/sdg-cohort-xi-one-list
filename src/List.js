import React, { Component } from "react"

class List extends Component {
  state = {}
  render() {
    return (
      <ul>
        <li>
          <input type="checkbox" />
          todo 1 <button>edit</button>
          <button>delete</button>
        </li>
        <li>
          <input type="checkbox" />
          todo 2 <button>edit</button>
          <button>delete</button>
        </li>
        <li>
          <input type="checkbox" />
          todo 3 <button>edit</button>
          <button>delete</button>
        </li>
      </ul>
    )
  }
}

export default List
