import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import styles from './PeopleNavigation.module.css';
import UiButton from '../../UI/UiButton/UiButton';

const PeopleNavigation = ({getResource, counterPage, nextPage, prevPage}) => {

    const handleChangePrev = () => getResource(prevPage)
    const handleChangeNext = () => getResource(nextPage)

    return (
        <div className={styles.link__wrapper}>
            <Link to={`/people/?page=${counterPage - 1}`} className={styles.link}>
                <UiButton
                    text='Previous'
                    onClick={handleChangePrev}
                    disabled={!prevPage}
                    theme='dark'
                />
            </Link>
            <Link to={`/people/?page=${counterPage + 1}`} className={styles.link}>
                <UiButton
                    text='Next'
                    onClick={handleChangeNext}
                    disabled={!nextPage}
                    theme='dark'
                />
            </Link>
        </div>
    );
};

export default PeopleNavigation;

PeopleNavigation.propTypes = {
    getResource: PropTypes.func,
    counterPage: PropTypes.number,
    nextPage: PropTypes.string,
    prevPage: PropTypes.string,
}