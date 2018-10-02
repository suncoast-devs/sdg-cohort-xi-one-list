import React, { Component } from 'react'

import moment from 'moment'

class Footer extends Component {
  TIME_FORMAT = 'MMMM Do YYYY, h:mm:ss a'

  constructor(props) {
    super(props)

    this.state = {
      now: moment().format(this.TIME_FORMAT),
      timer: 0
    }
  }

  componentDidMount = () => {
    const timer = setInterval(() => {
      this.setState({ now: moment().format(this.TIME_FORMAT) })
    }, 1000)

    this.setState({ timer })
  }

  componentWillUnmount = () => {
    clearInterval(this.state.timer)
  }

  render() {
    return (
      <footer>
        <p>Made with ❤️ at Suncoast Developers Guild</p>
        <p>{this.state.now}</p>
      </footer>
    )
  }
}

export default Footer
