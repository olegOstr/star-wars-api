import React, {useEffect, useState} from 'react';
import LoaderBlack from './img/loader-black.svg'
import LoaderWhite from './img/loader-white.svg'
import LoaderBlue from './img/loader-blue.svg'
import styles from './UiLoading.module.css';

const UiLoading = ({theme = 'white'}) => {

    const [loaderTheme, setLoaderTheme] = useState();

    useEffect(() => {
        switch (theme) {
            case 'black':
                setLoaderTheme(LoaderBlack);
                break
            case 'white':
                setLoaderTheme(LoaderWhite);
                break
            case 'blue':
                setLoaderTheme(LoaderBlue);
                break
            default:
                break
        }
    }, [])

    return (
        <div className={styles.loader__wrapper}>
            <img src={loaderTheme} alt="Loader" className={styles.loader}/>
        </div>
    );
};

export default UiLoading;