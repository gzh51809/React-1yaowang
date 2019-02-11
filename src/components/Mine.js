import React, { Component } from "react";
import "../sass/mine.scss";
import myImg from "../images/MineIcon/my.png";

import MineItem from "./Mine/MineItem";

class Mine extends Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          title: "我的订单",
          list: [
            {
              title: "待付款",
              pic: "01.jpg"
            },
            {
              title: "待发货",
              pic: "02.jpg"
            },
            {
              title: "待收货",
              pic: "03.jpg"
            },
            {
              title: "待评价",
              pic: "04.jpg"
            },
            {
              title: "退换货",
              pic: "05.jpg"
            }
          ]
        },
        {
          title: "我的服务",
          list: [
            {
              title: "健康档案",
              pic: "06.jpg"
            },
            {
              title: "看过买过",
              pic: "07.jpg"
            },
            {
              title: "我的收藏",
              pic: "08.jpg"
            },
            {
              title: "咨询中心",
              pic: "09.jpg"
            }
          ]
        },
        {
          title: "福利中心",
          list: [
            {
              title: "领券中心",
              pic: "10.jpg"
            },
            {
              title: "领奖励金",
              pic: "11.jpg"
            }
          ]
        }
      ]
    };
  }

  render() {
    let { data } = this.state;
    return (
      <div>
        <div className="mTop" />
        <div className="mBottom">
          <div className="myTop">
            <div className="login">
              <img src={myImg} alt="my" />
              <p>登录/注册</p>
            </div>
            <div className="money">
              <div className="moneyLeft">
                <span>0.00元</span>
                <span>余额</span>
              </div>
              <div className="moneyRight">
                <span>0张</span>
                <span>优惠券</span>
              </div>
            </div>
          </div>
          <div className="myBottom">
            {data.map((item, idx) => {
              return <MineItem data={item} key={idx} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Mine;
