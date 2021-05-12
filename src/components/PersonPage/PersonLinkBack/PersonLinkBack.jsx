import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import iconBack from './img/back.svg';
import styles from './PersonLinkBack.module.css';

const PersonLinkBack = () => {

    const history = useHistory();

    return (
        <div className={styles.wrapper}>
            <Link onClick={() => {
                history.goBack()
            }} to={'#'} className={styles.link}>
                <img className={styles.link__img} src={iconBack} alt="Go Back"/>
                <span>Go back</span>
            </Link>
        </div>
    );
};

export default PersonLinkBack;