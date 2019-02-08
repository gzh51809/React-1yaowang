import React, { Component } from "react";
import axios from "axios";
import { Icon } from "antd";
import { Carousel, WingBlank } from "antd-mobile";

import "../sass/home.scss";

import AutoPic from "./Home/AutoPic";
import SelectClassify from "./Home/SelectClassify";
import SelectSale from "./Home/SelectSale";
import SpecialList from "./Home/SpecialList";
import ImgURL from "../images/notice.png";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      pics: [],
      selects: [],
      notice: [],
      endDate: new Date().getTime(),
      goodsList1: [],
      pic: "",
      specials: []
    };
  }

  componentWillMount() {
    let _this = this;
    axios
      .get(
        "http://gateway.fangkuaiyi.com/mobile/home/getHeadData?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1549610183288&signature=****&siteid=9&deviceCode=E5FB0FBA-9F1E-4EAA-9E7D-C70C820998E7&locatecityname=%E4%BD%9B%E5%B1%B1&locateprovinceid=20"
      )
      .then(function(res) {
        let datas = res.data.data.banner;
        let selectList = res.data.data.templatedata[0].contentList;
        let noticeList = res.data.data.notice;
        let pic = [];
        let select = [];
        let notices = [];
        datas.map(item => pic.push(item.pic));
        selectList.map(item =>
          select.push({
            pic: item.adPic,
            title: item.adTitle
          })
        );
        noticeList.map(item => notices.push(item.title));
        _this.setState({
          pics: pic,
          selects: select,
          notice: notices
        });
      })
      .catch(function(err) {
        console.log(err);
      });

    axios
      .get(
        "http://gateway.fangkuaiyi.com/mobile/home/getTailData?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1549625904202&signature=****&siteid=9&deviceCode=E5FB0FBA-9F1E-4EAA-9E7D-C70C820998E7&locatecityname=%E4%BD%9B%E5%B1%B1&locateprovinceid=20"
      )
      .then(function(res) {
        let goods1 = res.data.data.grabTogether.mobileFlashSaleNewItems;
        let end = res.data.data.grabTogether.endDate;
        let data = res.data.data.goodTopic;
        let List1 = [];
        let dataList = [];
        goods1.map(item =>
          List1.push({
            id: item.id,
            title: item.flashSaleProductName,
            pic: item.mainimg3,
            price: item.promotionPrice
          })
        );
        data.map(item =>
          dataList.push({
            bigPic: item.picUrl,
            list: item.goodProducts
          })
        );

        _this.setState({
          endDate: end,
          goodsList1: List1,
          pic: res.data.data.bigMatch[0].picurl,
          specials: dataList
        });
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  render() {
    let {
      pics,
      selects,
      notice,
      goodsList1,
      endDate,
      pic,
      specials
    } = this.state;
    return (
      <div style={{ backgroundColor: "#eee", marginBottom: "55px" }}>
        <AutoPic pics={pics} height={149} />
        <SelectClassify selectList={selects} />
        <div className="notice">
          <img src={ImgURL} alt="logo" />
          <div className="notices">
            <WingBlank>
              <Carousel
                className="my-carousel"
                vertical
                dots={false}
                dragging={false}
                swiping={false}
                autoplay
                infinite
              >
                {notice.map((item, idx) => {
                  return (
                    <div className="v-item" key={idx}>
                      {item}
                    </div>
                  );
                })}
              </Carousel>
            </WingBlank>
          </div>
        </div>
        <SelectSale goodsList={goodsList1} end={endDate} />
        <img src={pic} alt="" style={{ height: "130px" }} />
        <div className="bottomList">
          <Icon type="like" className="icon" />
          <span className="titles">精选专题</span>
          <div className="lists">
            {specials.map((item, idx) => {
              return <SpecialList data={item} key={idx} />;
            })}
          </div>
        </div>
        <div className="bottomTitle">
            <p>广东壹号大药房连锁有限公司 020-31067218</p>
            <p>地址:广东省广州市越秀区共和西路1号2层</p>
        </div>
      </div>
    );
  }
}

export default Home;
