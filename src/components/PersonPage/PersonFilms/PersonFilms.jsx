import React, {useEffect, useState} from 'react';
import {makeConCurrentRequest, changeHTTP} from '../../../service/network';
import styles from './PersonFilms.module.css';
import PropTypes from 'prop-types';

const PersonFilms = ({personFilms}) => {

    const [filmsName, setFilmsName] = useState([])

    useEffect(() => {

        (async () => {
            const filmsHTTPS = personFilms.map(url => changeHTTP(url))
            const response = await makeConCurrentRequest(filmsHTTPS)

            response.sort((a, b) => a.episode_id - b.episode_id)

            setFilmsName(response)
        })();
    }, [personFilms])

    return (
        <div className={styles.films__wrapper}>
            <ul className={styles.films__list}>
                {filmsName.map(({title, episode_id}) => (
                    (
                        <li key={episode_id} className={styles.films__item}>
                            <span className={styles.films__episode}>Episode {episode_id}</span>
                            <span> : </span>
                            <span className={styles.films__field}>{title}</span>
                        </li>
                    )
                ))}
            </ul>
        </div>
    );
};

PersonFilms.propTypes = {
    personFilms: PropTypes.array,
};

export default PersonFilms;