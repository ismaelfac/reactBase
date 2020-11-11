import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import store from './redux/store';
//---- Pages -----//
import Home from './page/Home';
import Dashboard from './page/Dashboard';

const Root = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Redirect from="/" to="/home" />
            </Switch>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));