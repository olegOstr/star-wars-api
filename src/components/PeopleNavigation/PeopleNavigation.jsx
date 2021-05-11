import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import styles from './PeopleNavigation.module.css';

const PeopleNavigation = ({getResource, counterPage, nextPage, prevPage}) => {

    const handleChangePrev = () => getResource(prevPage)
    const handleChangeNext = () => getResource(nextPage)

    return (
        <>
            <h1 className='header__text'>People Page</h1>
            <Link to={`/people/?page=${counterPage - 1}`} className={styles.link}>
                <button onClick={handleChangePrev} disabled={!prevPage} className={styles.buttons}>Previous</button>
            </Link>
            <Link to={`/people/?page=${counterPage + 1}`} className={styles.link}>
                <button onClick={handleChangeNext} disabled={!nextPage} className={styles.buttons}>Next</button>
            </Link>
        </>
    );
};

export default PeopleNavigation;

PeopleNavigation.propTypes = {
    getResource: PropTypes.func,
    counterPage: PropTypes.number,
    nextPage: PropTypes.string,
    prevPage: PropTypes.string,
}