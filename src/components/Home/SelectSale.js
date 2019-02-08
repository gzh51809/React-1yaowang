import React, { Component } from "react";
import "../../sass/SelectSale.scss";
import ImgURL from "../../images/SelectSaleTitle.png";

import DragList from "./DragList";

class SelectSale extends Component {
  constructor() {
    super();
    this.state = {
      hour: "00",
      minutes: "00",
      seconds: "00"
    };
    this.countDown = this.countDown.bind(this);
  }

  componentWillMount() {
    this.countDown();
  }

  countDown() {
    let now = new Date().getTime();
    let leftTime = this.props.end - now;
    let h, m, s;
    if (leftTime >= 0) {
      h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
      m = Math.floor((leftTime / 1000 / 60) % 60);
      s = Math.floor((leftTime / 1000) % 60);
      if (h < 10) {
        h = "0" + h;
      }
      if (m < 10) {
        m = "0" + m;
      }
      if (s < 10) {
        s = "0" + s;
      }
    } else {
      h = "00";
      m = "00";
      s = "00";
    }
    this.setState({
      hour: h,
      minutes: m,
      seconds: s
    });
    setTimeout(this.countDown, 1000);
  }

  render() {
    let { goodsList } = this.props;
    let { hour, minutes, seconds } = this.state;
    return (
      <div>
        <div className="top">
          <div className="left">
            <img src={ImgURL} alt="title" />
          </div>
          <div className="center">
            据时间仅剩 |{" "}
            <span>
              {hour} : {minutes} : {seconds}
            </span>
          </div>
          <div className="right">
            <a href="/">
              更多
              <span className="arror" />
            </a>
          </div>
        </div>

        <DragList list={goodsList} />
      </div>
    );
  }
}

export default SelectSale;
