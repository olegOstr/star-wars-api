import {ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_TO_FAVORITE} from '../actions/actions';
import {combineReducers} from 'redux';
import {omit} from 'lodash';
import {getLocalStorage} from '../../service/localStorage';


const initialState = getLocalStorage('store');

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PERSON_TO_FAVORITE:

            return {
                ...state,
                ...action.payload
            }

        case REMOVE_PERSON_TO_FAVORITE:

            return omit(state, [action.payload])

        default:
            return state;
    }
}

export default combineReducers({favoriteReducer});