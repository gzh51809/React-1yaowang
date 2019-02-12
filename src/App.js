import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import "./sass/reset.scss";

import Home from "./components/Home";
import Find from "./components/Find";
import Cart from "./components/Cart";
import Mine from "./components/Mine";
import SearchPage from "./components/SearchPage";
import List from "./components/List"

import NavTab from "./components/NavTab";
class App extends Component {
  constructor() {
    super();

    this.state = {
      links: [
        {
          text: "首页",
          path: "/home",
          name: "Home",
          icon: "home"
        },
        {
          text: "找药",
          path: "/find",
          name: "Find",
          icon: "bars"
        },
        {
          text: "购物车",
          path: "/cart",
          name: "Cart",
          icon: "shopping-cart"
        },
        {
          text: "我的",
          path: "/mine",
          name: "Mine",
          icon: "user"
        }
      ],
      activeIdx: 0,
      show: true
    };
    this.changeTab = this.changeTab.bind(this);
  }

  componentDidMount() {
    let path = this.props.location.pathname;
    let idx = 0;
    let check = true;
    switch (path) {
      case "/home":
        check = true;
        idx = 0;
        break;
      case "/find":
        check = true;
        idx = 1;
        break;
      case "/cart":
        check = true;
        idx = 2;
        break;
      case "/mine":
        check = true;
        idx = 3;
        break;

      default:
        check = false;
        break;
    }
    this.setState({
      activeIdx: idx,
      show: check
    });
  }

  changeTab(idx) {
    this.setState({
      activeIdx: idx
    });
    this.props.history.push(this.state.links[idx].path);
  }

  render() {
    return (
      <div style={{ width: "100%", overflow: "hidden" }}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/find" component={Find} />
          <Route path="/cart" component={Cart} />
          <Route path="/mine" component={Mine} />
          <Route path="/search" component={SearchPage} />
          <Route path="/list/:id" component={List} />
          <Redirect from="/" to="/home" />
        </Switch>
        <NavTab
          navs={this.state.links}
          idx={this.state.activeIdx}
          change={this.changeTab}
          show={this.state.show}
        />{" "}
      </div>
    );
  }
}

App = withRouter(App);

export default App;
