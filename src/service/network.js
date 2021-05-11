import {HTTP, HTTPS} from '../constants/api';

/**
 * Смена URL c HTTP на HTTPS
 * @param {String} url - url для изменения
 * @return {String} - url HTTPS
 */
export const changeHTTP = (url) => {
    return url ? url.replace(HTTP, HTTPS) : url;
}

/**
 * Отправка Fetch запроса
 * @param {String} url - url для запроса
 * @return {Promise} - Promise с результатом запроса
 */
export const getApiResource = async (url) => {
    try {
        const res = await fetch(url, {method: 'GET'})
        if (!res.ok) {
            console.error('Could not Fetch:', res.status)
            return false
        }
        return await res.json()
    } catch (error) {
        console.error('Could not Fetch:', error.message)
        return false
    }
}