import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
// import "./index.css";
import "tachyons";

class Promise extends Component {
  constructor() {
    super();
    this.state = {
      color: "bg-white",
    };
  }
  colorChange = (color) => {
    const innerFunc = () => {
      this.setState({ color });
    };
    return innerFunc;
  };
  changeBack = () => {
    this.setState({ color: "bg-white" });
  };
  render() {
    return (
      <div>
        <article class={`center mw5 mw6-ns hidden ba mv4  ${this.state.color}`}>
          <h1 class="f4 bg-orange white mv0 pv2 ph3">Title of card</h1>
          <div class="pa3 bt">
            <p class="f6 f5-ns lh-copy measure mv0">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
          <div>
            <a
              onMouseEnter={this.colorChange("bg-blue")}
              onMouseLeave={this.changeBack}
              class="f6 grow no-underline br-pill ph4 pv2 mb2 dib white bg-blue ma2"
              href="#0"
            >
              Blue
            </a>
            <a
              onMouseEnter={this.colorChange("bg-yellow")}
              onMouseLeave={this.changeBack}
              class="f6 grow no-underline br-pill ph4 pv2 mb2 dib white bg-yellow ma2"
              href="#0"
            >
              Yellow
            </a>
            <a
              onMouseEnter={this.colorChange("bg-green")}
              onMouseLeave={this.changeBack}
              class="f6 grow no-underline br-pill ph4 pv2 mb2 dib white bg-green ma2"
              href="#0"
            >
              Green
            </a>
            <a
              onMouseEnter={this.colorChange("bg-gray")}
              onMouseLeave={this.changeBack}
              class="f6 grow no-underline br-pill ph4 pv2 mb2 dib white bg-gray ma2"
              href="#0"
            >
              Gray
            </a>
          </div>
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <>
    <Promise />
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
