import React from "react";
import { HashRouter, Switch, Route, Link, useLocation } from "react-router-dom";
import "./App.global.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Sheet from "./screens/Sheet.jsx";
import Selector from "./screens/Selector.jsx";
import Sidebar from "./components/window/Sidebar.jsx";
import Register from "./screens/Register.jsx";

export default function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <Sidebar />
                <Switch>
                    <Route exact path="/" component={Selector} />
                    <Route path="/character/:id" component={Sheet} />
                    <Route path="/login" component={Register} />
                </Switch>
            </HashRouter>
        </Provider>
    );
}
