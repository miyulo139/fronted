import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./AppHeader.css";

class AppHeader extends Component {
  render() {
    return (
      <header className="app-header">
        <div className="container">
          <div className="app-branding">
            <Link to="" className="app-title">
              Proyección Académica
            </Link>
          </div>
          <div className="app-options">
            <nav className="app-nav">
              {this.props.authenticated ? (
                <ul>
                  <li>
                    <button onClick={this.props.onLogout}>Logout</button>
                  </li>
                </ul>
              ) : (
                <ul>
                  <li></li>
                </ul>
              )}
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default AppHeader;
