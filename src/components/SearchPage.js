import React, { Component } from "react";
import Axios from "axios";
import "../sass/SearchPage.scss"

class SearchPage extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      def: ''
    };
  }

  componentWillMount(){
      let _this = this;
      Axios.get("http://gateway.fangkuaiyi.com/search/hotword?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1549691385349&signature=****&siteid=9")
      .then((res)=>{
        let data = res.data.data;
        let select = [];
        data.map((item=>select.push(item.keyword)))
        _this.setState({
            list: select
        })
      })
      .catch((err)=>{
          console.log(err)
      })

      Axios.get("http://gateway.fangkuaiyi.com/search/barword?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1549691385349&signature=****&siteid=9")
      .then((res)=>{
        _this.setState({
            def: res.data.data.keyword
        })
      })
      .catch((err)=>{
          console.log(err)
      })
  }

  render() {
      let {list, def} = this.state;
    return (
      <div>
        <div className="searchVal">
            <div className="back">
                <span className="arror"></span>
            </div>
            <div className="val">
                <input type="text" placeholder={def}/>
                <div className="search">搜索</div>
            </div>
        </div>
        <div className="selectMedicine">
          <h2>热门搜索</h2>
          {
              list.map((item, idx)=>{
                  return(
                      <div className="item" key={idx}>{item}</div>
                  )
              })
          }
        </div>
      </div>
    );
  }
}

export default SearchPage;
