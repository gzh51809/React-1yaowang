import React, { Component } from "react";
import { Icon } from "antd";
import "../../sass/ListSearch.scss";
import { Link } from "react-router-dom";

class ListSearch extends Component {
  render() {
    console.log(this.props.history);
    return (
      <ul className="ListSearch">
        <li
          className="left"
          onClick={() => {
            this.props.history.go(-1);
          }}
        >
          <span />
        </li>

        <Link to={"/search"}>
          <li className="center">
            <Icon type="search" className="icon" />
            <span />
          </li>
        </Link>
        <li className="right">
          <Icon type="shopping-cart" />
        </li>
      </ul>
    );
  }
}

export default ListSearch;
