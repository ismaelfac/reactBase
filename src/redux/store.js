import { createStore, combineReducers } from 'redux';
import home from './reducers/home';
import dashboard from './reducers/dashboard';
import profile from './reducers/profile';
const reducer = combineReducers({
    home,
    dashboard,
    profile
});

const store = createStore(reducer);

export default store;