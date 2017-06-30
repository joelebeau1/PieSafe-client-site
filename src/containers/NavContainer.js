import React, { Component } from 'react'
import NavBar from '../components/NavBar'

class NavContainer extends Component {
  constructor() {
    super()
    this.state = {
      links: [],
      isOpen: false
    }
  }

  render() {
    return (
      <div className="NavContainer">
        <NavBar />
      </div>
    )
  }
}

export default NavContainer
