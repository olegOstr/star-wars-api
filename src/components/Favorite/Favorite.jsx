import React, {useEffect, useState} from 'react';
import styles from './Favorite.module.css';
import BookmarkImg from './img/bookmark.svg';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Favorite = () => {

    const [count, setCount] = useState(null);

    const storeData = useSelector(state => state.favoriteReducer)

    useEffect(() => {

        const length = Object.keys(storeData).length

        setCount(length)

    }, [storeData])

    const length = Object.keys(storeData).length

    return (
        <div className={styles.fav__wrapper}>
            <NavLink exact to='/favorites'>
                <img src={BookmarkImg} alt="Bookmark"/>
                <span className={styles.fav__count}>{length > 0 ? count : 'O'}</span>
            </NavLink>
        </div>
    );
};

export default Favorite;