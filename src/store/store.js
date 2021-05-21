import {createStore} from 'redux';
import rootReducer from './reducers/index';
import {setLocalStorage} from '../service/localStorage';

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    setLocalStorage('favorite', store.getState().favoriteReducer)

});

store.subscribe(() => {
    setLocalStorage('theme', store.getState().themeReducer)
});


export default store;