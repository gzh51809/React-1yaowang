import React, { Component } from "react";
import "../../sass/MineItem.scss"

class MineItem extends Component {
  render() {
    let { data } = this.props;
    return (
      <div>
        <h2 className="serveName">{data.title}</h2>
        <ul className="myServe">
          {data.list.map((item, idx) => {
            return(
                <li key={idx}>
                    <img src={item.pic} alt={item.title}/>
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
