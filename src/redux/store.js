import { createStore, combineReducers } from 'redux';
//components
import NavBar from './reducers/components/NavBar';
import navBarLeft from './reducers/components/navBarLeft';
import home from './reducers/pages/home';
import dashboard from './reducers/pages/dashboard';
import profile from './reducers/modules/profile';

const reducer = combineReducers({
    NavBar,
    navBarLeft,
    home,
    dashboard,
    profile,
});

const store = createStore(reducer);

export default store;