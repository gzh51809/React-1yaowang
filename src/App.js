import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./sass/reset.scss";

import Home from "./components/Home";
import Find from "./components/Find";
import Cart from "./components/Cart";
import Mine from "./components/Mine";

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
      activeIdx: 0
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(idx) {
    this.setState({
      activeIdx: idx
    });
    this.props.history.push(this.state.links[idx].path)
    console.log(this.state.links[idx].path);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/find" component={Find} />
          <Route path="/cart" component={Cart} />
          <Route path="/mine" component={Mine} />
          <Route path="/" component={Home} />
        </Switch>

        <NavTab
          navs={this.state.links}
          idx={this.state.activeIdx}
          change={this.changeTab}
        />
      </div>
    );
  }
}

App = withRouter(App);

export default App;
