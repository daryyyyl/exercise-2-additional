import React, { Component } from "react";
import { Space, Badge } from "antd";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  formatBadge() {
    if (this.props.totalCount) {
      return this.props.totalCount;
    }
  }
  render() {
    return (
      <div className="container-fluid p-0 m-0">
        <nav className="navbar navbar-dark navbar-expand-lg bg-body-tertiary bg-dark">
          <div className="container-sm">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <span className="navbar-brand mb-0 h1">
              <strong>KICKS ZONE</strong>
            </span>
            <div
              className="collapse navbar-collapse py-2"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <span></span>
              </div>
            </div>
            <Space direction="vertical">
              <Space size="large">
                <Link to="/cartProducts">
                  <Badge count={this.formatBadge()}>
                    <i className="fa-solid fa-cart-shopping text-light fs-5"></i>
                  </Badge>
                </Link>
              </Space>
            </Space>
          </div>
        </nav>
      </div>
    );
  }
}
