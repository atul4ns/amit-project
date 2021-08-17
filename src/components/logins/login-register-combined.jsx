import React from "react";
import {Register} from "./register";
import {RightSide} from "./rightside";
import {Login} from "./login";

export class LoginRegisterCombined extends React.Component {
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
        const {isLogginActive} = this.state;

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
        const {isLogginActive} = this.state;
        const current = isLogginActive ? "Register" : "Login";
        const currentActive = isLogginActive ? "login" : "register";
        return (
            <div className="login">
                <div className="container" ref={(ref) => (this.container = ref)}>
                    {isLogginActive && (
                        <Login containerRef={(ref) => (this.current = ref)}/>
                    )}
                    {!isLogginActive && (
                        <Register containerRef={(ref) => (this.current = ref)}/>
                    )}
                </div>
                <RightSide
                    current={current}
                    currentActive={currentActive}
                    containerRef={(ref) => (this.rightSide = ref)}
                    onClick={this.changeState.bind(this)}
                />
            </div>
        );
    }
}
