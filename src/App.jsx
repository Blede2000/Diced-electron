import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.global.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Sheet from "./screens/Sheet.jsx";

export default function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" component={Sheet} />
                </Switch>
            </Router>
        </Provider>
    );
}