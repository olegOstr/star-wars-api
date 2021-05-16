import React from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import styles from './PersonPhoto.module.css'
import {addPersonToFavorite, removePersonToFavorite} from '../../../store/actions/actions';
import FavWhite from './img/favorite-white.svg'
import FavOrange from './img/favorite-orange.svg'

const PersonPhoto = ({personPhoto, personName, personId, personFavorite, setPersonFavorite}) => {

    const dispatch = useDispatch()

    const dispatchFavoritePerson = () => {
        if (personFavorite) {
            dispatch(removePersonToFavorite(personId))
            setPersonFavorite(false)
        } else {
            dispatch(addPersonToFavorite({
                [personId]: {
                    name: personName,
                    img: personPhoto
                },
            }))
            setPersonFavorite(true)
        }
    }

    return (
        <>

            <div className={styles.photo__wrapper}>
                <img className={styles.photo} src={personPhoto} alt={personName}/>

                <img className={styles.favorite__img}
                     onClick={dispatchFavoritePerson}
                     src={personFavorite ? ` ${FavOrange}` : `${FavWhite}`}
                     alt=" Add to Favorite"/>
            </div>


        </>
    );
};

PersonPhoto.propTypes = {
    personPhoto: PropTypes.string,
    alt: PropTypes.string,
    personId: PropTypes.string,
    personFavorite: PropTypes.bool,
    setPersonFavorite: PropTypes.func,
};

export default PersonPhoto;