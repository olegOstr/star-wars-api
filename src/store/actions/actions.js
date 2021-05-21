//ACTION CONST
export const ADD_PERSON_TO_FAVORITE = 'ADD_PERSON_TO_FAVORITE';
export const REMOVE_PERSON_TO_FAVORITE = 'REMOVE_PERSON_TO_FAVORITE';
export const CHANGE_THEME = 'CHANGE_THEME';


//ACTIONS
export const addPersonToFavorite = (person) => ({
    type: ADD_PERSON_TO_FAVORITE,
    payload: person
})

export const removePersonToFavorite = (personId) => ({
    type: REMOVE_PERSON_TO_FAVORITE,
    payload: personId
})

export const setTheme = (payload) => ({
    type: CHANGE_THEME,
    payload
})



