import React, { Component } from "react";
import "../../sass/SelectClassify.scss";

class SelectClassify extends Component {
  render() {
    let { selectList} = this.props;
    return (
      <div className="selectList">
        <ul>
          {selectList.map((item, idx) => {
            return (
              <li key={idx}>
                <a href="/">
                  <img src={item.pic} alt={item.title} />
                  <span>{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SelectClassify;
