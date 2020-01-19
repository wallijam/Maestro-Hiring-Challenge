import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { FaShoppingCart } from "react-icons/fa"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/about",
        text: "about",
      },
    ],
  }

  // I do not want this method in my state above
  // making sure that links do not show at sm sized screen and rely on navbar click to show
  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "collapse navbar-collapse" })
      : this.setState({
          navbarOpen: true,
          css: "collpase navbar-collapse show",
        })
  }

  // stating at what screensize the navbar will expand sm around 576px
  // navbar is going to be light, so the text will be dark
  // including pointer to navbar logo

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
          {/* {https://www.iconfinder.com/icons/1531890/cast_magic_spell_wand_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/pocike} */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.text}
                  </Link>
                </li>
              )
            })}

            {/* adding cart icon and padding */}
            <li className="nav-item ml-sm-5">
              <FaShoppingCart className="cart-icon" />
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
