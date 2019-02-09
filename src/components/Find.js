import React, { Component } from "react";
import axios from "axios";

class Find extends Component {
  constructor() {
    super();

    this.state = {
      list: []
    };
  }

  componentWillMount() {
    // let _this = this;
    axios
      .get(
        "http://gateway.fangkuaiyi.com/mobile/category/getItemFirstCategory?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1549655788183&signature=****&siteid=9",
        {
          searchtype: "1",
          fatherid: "-1",
          categorytype: "1",
          clientappversion: "111",
          phonetype: "iPhone"
        }
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className="FLeft" />
        <div className="FRight" />
      </div>
    );
  }
}

export default Find;
