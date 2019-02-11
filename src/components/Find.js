import React, { Component } from "react";
import axios from "axios";
import "../sass/find.scss";

import Search from "./Home/Search";
import LineList from "./Find/LineList";
import AutoPic from "./Home/AutoPic";
import RowList from "./Find/RowList";

class Find extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      act: 0,
      imgList: [],
      title: "",
      selectList: []
    };

    this.changeTab = this.changeTab.bind(this);
  }

  componentWillMount() {
    let _this = this;
    axios
      .get("http://localhost:1138/data/classifyList.json")
      .then(res => {
        let resData = res.data.data;
        let dataList = [];
        resData.map(item =>
          dataList.push({
            title: item.name
          })
        );

        _this.setState({
          list: dataList
        });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get("http://localhost:1138/data/classify/1.json")
      .then(res => {
        let name = res.data.data.categoryinfo[0].name;
        let list = res.data.data.categoryinfo[0].thridCategory;
        let data = [];
        list.map(item =>
          data.push({
            name: item.name,
            pic: item.icon
          })
        );

        _this.setState({
          title: name,
          selectList: data
        });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get("http://localhost:1138/data/classify/autoPic.json")
      .then(res => {
        let data = res.data.data.categoryBanners;
        let imgs = [];
        data.map(item => imgs.push(item.bannerUrl));

        _this.setState({
          imgList: imgs
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  changeTab(idx) {
    let _this = this;
    if (idx !== this.state.act) {
      this.setState({
        act: idx
      });
      axios
      .get('http://localhost:1138/data/classify/' + (idx+1) + '.json')
      .then(res => {
        let name = res.data.data.categoryinfo[0].name;
        let list = res.data.data.categoryinfo[0].thridCategory;
        let data = [];
        list.map(item =>
          data.push({
            name: item.name,
            pic: item.icon
          })
        );

        _this.setState({
          title: name,
          selectList: data
        });
      })
      .catch(err => {
        console.log(err);
      });
    }
  }

  render() {
    let { list, act, imgList, title, selectList } = this.state;
    return (
      <div>
        <Search active={"active"} bg={"#e7e7e7"} />{" "}
        <div className="Fleft">
          <LineList data={list} act={act} changeTab={this.changeTab} />
        </div>
        <div className="Fright">
          <div className="frTop">
            <AutoPic pics={imgList} height={75} />
          </div>
          <div className="frBottom">
            <h4>{title}</h4>
            <RowList list={selectList} />
          </div>
        </div>
      </div>
    );
  }
}

export default Find;
