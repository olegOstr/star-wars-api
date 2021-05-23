import React from 'react';
import {useDispatch} from 'react-redux';
import {setTheme} from '../../../store/actions/actions';
import {motion} from 'framer-motion';
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

    const buttonVar = {
        hidden: {
            width: '0px',
            x: -100,
            opacity: 0
        },
        visible: {
            width: '200px',
            x: 0,
            opacity: 1
        }
    }

    return (
        <div>
            <h1 className='header__text'>Choose Your Side</h1>

            <div className={styles.chose__wrapper}>
                <motion.button className={styles.chose__item} onClick={handlerThemeLight}
                               initial={'hidden'}
                               animate={'visible'}
                               transition={{duration: 0.7, delay: .1}}
                               variants={buttonVar}
                >Choose
                    <img className={styles.chose__item__img} src={LightSide} alt=""/>
                </motion.button>

                <motion.button className={styles.chose__item} onClick={handlerThemeDark}
                               initial={'hidden'}
                               animate={'visible'}
                               transition={{duration: 0.7, delay: 0.2}}
                               variants={buttonVar}
                >Choose
                    <img className={styles.chose__item__img} src={DarkSide} alt=""/>
                </motion.button>

                <motion.button className={styles.chose__item} onClick={handlerThemeFalcon}
                               initial={'hidden'}
                               animate={'visible'}
                               transition={{duration: 0.7, delay: 0.3}}
                               variants={buttonVar}
                >Choose
                    <img className={styles.chose__item__img} src={FalconSide} alt=""/>
                </motion.button>
            </div>
        </div>
    );
};

export default ChooseSide;