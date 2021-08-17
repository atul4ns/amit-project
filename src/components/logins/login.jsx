import React from "react";
import loginImg from "./login.png";

export class Login extends React.Component {

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header"/>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} alt="icon"/>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                            />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">
                        Login
                    </button>
                </div>
            </div>
        );
    }
}
