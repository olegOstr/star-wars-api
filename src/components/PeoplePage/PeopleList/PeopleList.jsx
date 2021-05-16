import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './PeopleList.module.css'
import UiLoading from '../../UI/UiLoading/UiLoading';

const PeopleList = ({people}) => {

    const [isLoad, setIsLoad] = useState(false)

    useEffect(() => {
        setIsLoad(true)

        setTimeout(() => {
            people && setIsLoad(false)
        }, 200)
    }, [people])


    return (
        <ul className={styles.list__container}>
            {people.map(({name, img, id}) =>
                <li className={styles.list__item} key={id}>
                    <Link to={`/people/${id}`}>
                        {isLoad ? <UiLoading theme='blue'/> :
                            <img className={styles.person__photo} src={img} alt={name}/>}
                        <p>{name}</p>
                    </Link>
                </li>
            )}
        </ul>
    );
};

PeopleList.propTypes = {
    people: PropTypes.array
}
export default PeopleList;