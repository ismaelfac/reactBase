import { createStore, combineReducers } from 'redux';
import home from './reducers/pages/home';
import dashboard from './reducers/pages/dashboard';
import profile from './reducers/modules/profile';
const reducer = combineReducers({
    home,
    dashboard,
    profile
});

const store = createStore(reducer);

export default store;