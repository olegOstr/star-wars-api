import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from './star-wars-4.svg'
import styles from './Header.module.css';
import Favorite from '../Favorite/Favorite';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>

                <NavLink exact to='/'>
                    <div className={styles.header__logo}><img src={Logo} alt="Logo"/></div>
                </NavLink>


                <ul className={styles.list__container}>
                    <li className={styles.list__item}>
                        <NavLink exact to='/'>Home</NavLink>
                    </li>
                    <li className={styles.list__item}>
                        <NavLink to='/people/?page=1'>People</NavLink>
                    </li>
                    <li className={styles.list__item}>
                        <NavLink exact to='/not-found'>Not Found</NavLink>
                    </li>
                </ul>

                <Favorite/>
            </nav>
        </header>
    );
};

export default Header;