import React, { Component } from "react";
import ImgURL from "../../images/logo.png";
import "../../sass/Search.scss";
import { Icon } from "antd";
import { Link } from "react-router-dom";

class Search extends Component {
  render() {
    return (
      <div className="search" style={{backgroundColor: this.props.bg}}>
        <div className="Sleft">
          <img src={ImgURL} alt="logo" />
          <span className={this.props.active + " location"}>广州</span>
        </div>
        <div className="Scenter">
          <Link to={"/search"}>
            <input type="text" placeholder="输入商品名称" />
          </Link>
        </div>
        <div className="Sright">
          <Icon type="message" className={"icon " + this.props.active} />
          <span className={this.props.active}>咨询药师</span>
        </div>
      </div>
    );
  }
}

export default Search;
