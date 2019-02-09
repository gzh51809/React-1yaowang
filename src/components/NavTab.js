import React, { Component } from "react";
import "../sass/navTab.scss";
import { Icon } from "antd"; 

class NavTab extends Component {
  render() {
      let {navs, idx, change, show} = this.props
    return (
      <div>
        <ul id="navTab" style={{display:show ? 'block' : 'none'}}>
          {navs.map((item, index) => {
            return (
              <li key={item.path} className={index === idx ? 'active' : ''} onClick={()=>{change(index)}}>
                <Icon type={item.icon} className="icon"/>
                <span>{item.text}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NavTab;
