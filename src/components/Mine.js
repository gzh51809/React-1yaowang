import React, { Component } from "react";
import "../sass/mine.scss";
import myImg from "../images/MineIcon/my.png";

import MineItem from "./Mine/MineItem";

import a1 from '../images/MineIcon/01.png'
import a2 from '../images/MineIcon/02.png'
import a3 from '../images/MineIcon/03.png'
import a4 from '../images/MineIcon/04.png'
import a5 from '../images/MineIcon/05.png'
import b1 from '../images/MineIcon/06.png'
import b2 from '../images/MineIcon/07.png'
import b3 from '../images/MineIcon/08.png'
import b4 from '../images/MineIcon/09.png'
import c1 from '../images/MineIcon/10.png'
import c2 from '../images/MineIcon/11.png'

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
              pic: a1
            },
            {
              title: "待发货",
              pic: a2
            },
            {
              title: "待收货",
              pic: a3
            },
            {
              title: "待评价",
              pic: a4
            },
            {
              title: "退换货",
              pic: a5
            }
          ]
        },
        {
          title: "我的服务",
          list: [
            {
              title: "健康档案",
              pic: b1
            },
            {
              title: "看过买过",
              pic: b2
            },
            {
              title: "我的收藏",
              pic: b3
            },
            {
              title: "咨询中心",
              pic: b4
            }
          ]
        },
        {
          title: "福利中心",
          list: [
            {
              title: "领券中心",
              pic: c1
            },
            {
              title: "领奖励金",
              pic: c2
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
        <div className="mTop" >
          <ul>
            <li className="fl">广州</li>
            <li className="fr">设置</li>
          </ul>
        </div>
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
