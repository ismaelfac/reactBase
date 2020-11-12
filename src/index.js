import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import store from './redux/store';
//---- Pages -----//
import Home from './page/Home';
import About from './page/About';
import DashboardBase from './page/Dashboard';

const Root = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/dashboard" component={DashboardBase} />
                <Redirect from="/" to="/home" />
            </Switch>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));