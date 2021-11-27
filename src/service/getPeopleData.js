import {
    GUIDE_IMG_EXTENSION,
    HTTP,
    HTTPS,
    SWAPI_PARAM_PAGE,
    SWAPI_PEOPLE,
    SWAPI_ROOT,
    URL_IMG_PERSON
} from '../constants/api';

// const getId = (url, category) => {
//     return url.replace(HTTP + SWAPI_ROOT + category, '').replace(/\//g, '')
// }

const checkProtocol = url => {
    if (url.indexOf(HTTPS) !== -1) {
        return HTTPS;
    }
    return HTTP;
}

const getId = (url, category) => {
    const protocol = checkProtocol(url);

    return url.replace(protocol + SWAPI_ROOT + category, '').replace(/\//g, '');
}

export const getPeoplePageId = url => {
    const position = url.lastIndexOf(SWAPI_PARAM_PAGE)
    const pageId = url.slice(position + SWAPI_PARAM_PAGE.length)

    return Number(pageId)
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE)

export const getPeopleImg = id => `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`;