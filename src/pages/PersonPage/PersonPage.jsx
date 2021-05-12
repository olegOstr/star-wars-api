import React, {useEffect, useState} from 'react';
import {getApiResource} from '../../service/network';
import {API_PERSON} from '../../constants/api';
import {withErrorApi} from '../../hoc-helpers/withErrorApi';
import {getPeopleImg} from '../../service/getPeopleData';
import PersonInfo from '../../components/PersonPage/PersonInfo/PersonInfo';
import PersonPhoto from '../../components/PersonPage/PersonPhoto/PersonPhoto';
import PropTypes from 'prop-types';
import styles from './PersonPage.module.css'
import PersonLinkBack from '../../components/PersonPage/PersonLinkBack/PersonLinkBack';

const PersonPage = ({setErrorApi, match}) => {

    const [personInfo, setPersonInfo] = useState(null)
    const [personName, setPersonName] = useState(null)
    const [personPhoto, setPersonPhoto] = useState(null)

    useEffect(() => {
        (async () => {

            const id = match.params.id
            const res = await getApiResource(`${API_PERSON}/${id}/`);

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

            setPersonName(res.name);
            setPersonPhoto(getPeopleImg(id))

        })();
        
    }, [setErrorApi, match]);

    return (
        <div className={styles.wrapper}>

            <PersonLinkBack/>

            <span className={styles.person__name}>{personName}</span>

            <div className={styles.person__container}>
                <PersonPhoto personPhoto={personPhoto} alt={personName}/>
                {personInfo && <PersonInfo personInfo={personInfo}/>}
            </div>
        </div>
    );
};

PersonPage.propTypes = {
    setErrorApi: PropTypes.func,
    match: PropTypes.object
};

export default withErrorApi(PersonPage);