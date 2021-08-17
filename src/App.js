import React from "react";

import "./App.scss";
import { Login, Register, Event } from "./components/logins/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Events } from "./components/events/eindex";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState((prevState) => ({
      isLogginActive: !prevState.isLogginActive,
    }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <Router>
        <div className="App">
          <switch>
            <Route path="/events" component={Event} />

            <div className="login">
              <div className="container" ref={(ref) => (this.container = ref)}>
                {isLogginActive && (
                  <Login containerRef={(ref) => (this.current = ref)} />
                )}
                {!isLogginActive && (
                  <Register containerRef={(ref) => (this.current = ref)} />
                )}
              </div>
              <RightSide
                current={current}
                currentActive={currentActive}
                containerRef={(ref) => (this.rightSide = ref)}
                onClick={this.changeState.bind(this)}
              />
            </div>
          </switch>
        </div>
      </Router>
    );
  }
}

const RightSide = (props) => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default App;
