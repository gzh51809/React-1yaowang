import React, { Component } from "react";
import { Carousel, WingBlank } from "antd-mobile";

class AutoPic extends Component {
  render() {
    let { pics, height } = this.props;
    return (
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite
        >
          {pics.map(val => (
            <a
              key={val}
              href="/"
              style={{
                display: "inline-block",
                width: "100%",
                height: height
              }}
            >
              <img
                src={val}
                alt=""
                style={{ width: "100%", verticalAlign: "top" }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event("resize"));
                  this.setState({ imgHeight: "auto" });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    )
  }
}

export default AutoPic;
