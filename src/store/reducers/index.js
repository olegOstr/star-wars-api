import {combineReducers} from 'redux';
import favoriteReducer from './reducers';
import themeReducer from './themeReducer';


export default combineReducers({
    favoriteReducer,
    themeReducer
});