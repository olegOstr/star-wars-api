import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className='header__text'>Logo</div>

                <ul className={styles.list__container}>
                    <li className={styles.list__item}>
                        <NavLink exact to='/'>Home</NavLink>
                    </li>
                    <li className={styles.list__item}>
                        <NavLink exact to='/people/?page=1'>People</NavLink>
                    </li>

                    <li className={styles.list__item}>
                        <NavLink exact to='/not-found'>Not Found</NavLink>
                    </li>
                </ul>

                <div className='header__text'>Bookmarks</div>
            </nav>
        </header>
    );
};

export default Header;