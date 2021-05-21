import {CHANGE_THEME} from '../actions/actions';
import {getLocalStorage} from '../../service/localStorage';


const initialState = getLocalStorage('theme');

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME :
            return {
                ...state,
                theme: action.payload
            }

        default:
            return state;
    }
}

export default themeReducer;