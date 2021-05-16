import React, {useEffect, useState, Suspense} from 'react';
import {getApiResource} from '../../service/network';
import {API_PERSON} from '../../constants/api';
import {withErrorApi} from '../../hoc-helpers/withErrorApi';
import {getPeopleImg} from '../../service/getPeopleData';
import PersonInfo from '../../components/PersonPage/PersonInfo/PersonInfo';
import PersonPhoto from '../../components/PersonPage/PersonPhoto/PersonPhoto';
import PropTypes from 'prop-types';
import styles from './PersonPage.module.css'
import PersonLinkBack from '../../components/PersonPage/PersonLinkBack/PersonLinkBack';
import UiLoading from '../../components/UI/UiLoading/UiLoading';
import {useSelector} from 'react-redux';

const PersonFilms = React.lazy(() => import('../../components/PersonPage/PersonFilms/PersonFilms'));

const PersonPage = ({setErrorApi, match}) => {

    const [personInfo, setPersonInfo] = useState(null)
    const [personName, setPersonName] = useState(null)
    const [personPhoto, setPersonPhoto] = useState(null)
    const [personFilms, setPersonFilms] = useState(null)
    const [personId, setPersonId] = useState(null)
    const [personFavorite, setPersonFavorite] = useState(false)

    const storeData = useSelector(state => state.favoriteReducer)

    useEffect(() => {
        (async () => {
            const id = match.params.id
            const res = await getApiResource(`${API_PERSON}/${id}/`);

            storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false)

            setPersonId(id)

            setErrorApi(!res)

            setPersonInfo([
                {title: 'Name', data: res.name},
                {title: 'Height', data: res.height},
                {title: 'Mass', data: res.mass},
                {title: 'Hair Color', data: res.hair_color},
                {title: 'Skin Color', data: res.skin_color},
                {title: 'Eye Color', data: res.eye_color},
                {title: 'Birth Year', data: res.birth_year},
                {title: 'Gender', data: res.gender},
            ])

            res.films.length && setPersonFilms(res.films)
            setPersonName(res.name);
            setPersonPhoto(getPeopleImg(id))

        })();

    }, [setErrorApi, match, storeData]);


    return (
        <div className={styles.wrapper}>

            <PersonLinkBack/>

            <span className={styles.person__name}>{personName}</span>

            <div className={styles.person__container}>
                <PersonPhoto personFavorite={personFavorite}
                             setPersonFavorite={setPersonFavorite}
                             personId={personId}
                             personPhoto={personPhoto}
                             personName={personName}/>
                {personInfo && <PersonInfo personInfo={personInfo}/>}
                {personFilms && (
                    <Suspense fallback={<UiLoading theme='blue'/>}>
                        <PersonFilms personFilms={personFilms}/>
                    </Suspense>
                )}
            </div>
        </div>
    );
};

PersonPage.propTypes = {
    setErrorApi: PropTypes.func,
    match: PropTypes.object
};

export default withErrorApi(PersonPage);