import React from 'react';
import {useLocation} from 'react-router-dom';
import img from './404.jpg'
import styles from './NotFoundPage.module.css';


const NotFoundPage = () => {
    let location = useLocation();

    return (
        <div className={styles.not__found}>
            <img className={styles.img} src={img} alt='404 not found'/>
            <p className={styles.text}>No match for: <u>{location.pathname}</u></p>
        </div>
    );
};

export default NotFoundPage;