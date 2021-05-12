import React from 'react';
import PropTypes from 'prop-types';
import styles from './PersonPhoto.module.css'

const PersonPhoto = ({personPhoto, alt}) => {
    return (
        <div className={styles.photo__wrapper}>
            <img className={styles.photo} src={personPhoto} alt={alt}/>
        </div>
    );
};

PersonPhoto.propTypes = {
    personPhoto: PropTypes.string,
    alt: PropTypes.string,
};

export default PersonPhoto;