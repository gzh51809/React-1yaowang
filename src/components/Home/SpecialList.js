import React, { Component } from "react";
import DragList from "./DragList";

class SpecialList extends Component {
  render() {
    let { bigPic, list } = this.props.data;
    let datas = [];
    list.map(item =>
      datas.push({
        id: item.id,
        pic: item.productImg,
        price: item.sellPrice,
        title: item.productName
      })
    );
    return (
      <div style={{ padding: "10px" }}>
        <img src={bigPic} alt="special" style={{ width: "100%" }} />
        <DragList list={datas} />
      </div>
    );
  }
}

export default SpecialList;
