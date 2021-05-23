import React, {useEffect, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import styles from './Header.module.css';
import Favorite from '../Favorite/Favorite';
import {useSelector} from 'react-redux';

import logoDroid from './img/droid.svg'
import logoLightSaber from './img/lightsaber.svg'
import logoSpaceStation from './img/space-station.svg'
import {changeCssVar} from '../../service/changeCssVar';


const Header = () => {

    const [icon, setIcon] = useState(logoLightSaber);

    const {theme} = useSelector((state) => state.themeReducer)

    useEffect(() => {
        changeCssVar(theme)

        switch (theme) {
            case 'light':
                return setIcon(logoLightSaber)

            case 'dark':
                return setIcon(logoSpaceStation)

            case 'falcon':
                return setIcon(logoDroid)

            default:
                break
        }

    }, [theme])

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>

                <Link to='/'>
                    <div className={styles.header__logo}><img src={icon} alt="Logo"/></div>
                </Link>

                <ul className={styles.list__container}>
                    <li className={styles.list__item}>
                        <NavLink exact to='/'>Home</NavLink>
                    </li>
                    <li className={styles.list__item}>
                        <NavLink to='/people/?page=1'>People</NavLink>
                    </li>
                </ul>

                <Favorite/>
            </nav>
        </header>
    );
};

export default Header;