import React, { Component } from 'react'
import Link from 'Link'

class NavBar extends Component {
  renderLink = link => {
    return <Link path={link.path} text={link.text} />
  }
  render() {
    const links = this.props.links
    return (
      <div className="NavBar">
        {links.map(this.renderLink)}
      </div>
    )
  }
}
export default NavBar
