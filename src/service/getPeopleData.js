import {HTTP, SWAPI_PEOPLE, SWAPI_ROOT, GUIDE_IMG_EXTENSION, URL_IMG_PERSON} from '../constants/api';

const getId = (url, category) => {
    return url.replace(HTTP + SWAPI_ROOT + category, '')
    .replace(/\//g, '')
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE)

export const getPeopleImg = id => `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`;