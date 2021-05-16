import {createStore} from 'redux';
import rootReducer from './reducers/reducers';
import {setLocalStorage} from '../service/localStorage';

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    setLocalStorage('store', store.getState().favoriteReducer)

});

export default store;