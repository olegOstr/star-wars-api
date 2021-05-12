import React from 'react';
import PropTypes from 'prop-types';
import styles from './PersonInfo.module.css';

const PersonInfo = ({personInfo}) => {
    return (
        <div className={styles.info__wrapper}>
            {personInfo && (
                <ul className={styles.info__list}>
                    {personInfo.map(({title, data}) => (
                        data && (
                            <li className={styles.info__item} key={title}>
                                <span className={styles.info__field}>{title}</span> : {data}
                            </li>
                        )
                    ))}
                </ul>
            )}
        </div>
    );
};

PersonInfo.propTypes = {
    personInfo: PropTypes.array
};

export default PersonInfo;