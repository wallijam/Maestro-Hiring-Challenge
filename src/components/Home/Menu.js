import React, { Component } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      wandItems: props.items.edges,
    }
  }
  render() {
    if (this.state.items.length > 0) {
      return <div>hello from the menu section </div>
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="What we got" />
          </div>
        </section>
      )
    }
  }
}
