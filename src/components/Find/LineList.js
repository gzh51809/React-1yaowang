import React, { Component } from "react";
import "../../sass/LineList.scss";

class LineList extends Component {
  render() {
    let { data, act, changeTab } = this.props;
    return (
      <div>
        <ul className="lineList">
          {data.map((item, idx) => {
            return (
              <li key={idx} className={idx === act ? "active" : ""} onClick={()=>{changeTab(idx)}}>
                <span>{item.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default LineList;
