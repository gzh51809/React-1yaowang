import React, { Component } from "react";
import Img from "./Img";

class MineItem extends Component {
  render() {
    let { data } = this.props;
    return (
      <div>
        <h2>{data.title}</h2>
        <ul>
          {data.list.map((item, idx) => {
            return(
                <li key={idx}>
                    <Img name={item.pic}/>
                    <p>{item.title}</p>
                </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default MineItem
