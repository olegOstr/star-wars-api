import React from 'react';
import {useDispatch} from 'react-redux';
import {setTheme} from '../../../store/actions/actions';

import DarkSide from './img/dark-side.jpg';
import LightSide from './img/light-side.jpg';
import FalconSide from './img/falcon.jpg';

import styles from './ChooseSide.module.css';

const ChooseSide = () => {

    const dispatch = useDispatch()

    const handlerThemeDark = () => {
        dispatch(setTheme('dark'))
    }

    const handlerThemeLight = () => {
        dispatch(setTheme('light'))
    }

    const handlerThemeFalcon = () => {
        dispatch(setTheme('falcon'))
    }

    return (
        <div>
            <h1 className='header__text'>Choose Your Side</h1>

            <div className={styles.chose__wrapper}>
                <button className={styles.chose__item} onClick={handlerThemeLight}>
                    <img className={styles.chose__item__img} src={LightSide} alt=""/>
                </button>
                <button className={styles.chose__item} onClick={handlerThemeDark}>
                    <img className={styles.chose__item__img} src={DarkSide} alt=""/>
                </button>
                <button className={styles.chose__item} onClick={handlerThemeFalcon}>
                    <img className={styles.chose__item__img} src={FalconSide} alt=""/>
                </button>
            </div>
        </div>
    );
};

export default ChooseSide;