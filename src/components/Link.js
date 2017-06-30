import React, { Component } from 'react'

class Link extends Component {
  render() {
    const path = this.props.path
    const text = this.props.text
    return (
      <div className="link">
        <a href={path} className="link">{text}</a>
      </div>
    )
  }
}

export default Link
