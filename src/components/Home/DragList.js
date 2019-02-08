import React, { Component } from "react";
import "../../sass/DragList.scss";

class DragList extends Component {
  render() {
    let { list } = this.props;
    return (
      <div style={{ overflow: "hidden" }}>
        <ul style={{ width: list.length * 120 + "px" }} className="DList" ref="list">
          {list.map(item => {
            return (
              <li id={item.id} key={item.title}>
                <a href="/">
                  <img src={item.pic} alt={item.title} />
                  <p>{item.title}</p>
                  <span>￥{item.price}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default DragList;
