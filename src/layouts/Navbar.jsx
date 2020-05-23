import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark fixed-top">
          <div className="container">
            <Link to="/" className="navbar-brand">
              React Shopping Cart
            </Link>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  <i className="fas fa-shopping-cart"></i>
                  <span class="badge badge-pill badge-danger">
                    {this.props.counter}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

export default connect(mapStateToProps)(Navbar);
