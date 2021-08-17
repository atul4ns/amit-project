import React from "react";

import "./App.scss";
import {Event} from "./components/logins/index";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {LoginRegisterCombined} from "./components/logins/login-register-combined";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/logins" component={LoginRegisterCombined}/>
                        <Route exact path="/events" component={Event}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
