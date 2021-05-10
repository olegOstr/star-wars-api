import React, {useState, useEffect} from 'react';
import './PeoplePage.module.css';

import {getApiResource} from '../../service/network';
import {API_PEOPLE} from '../../constants/api';
import {getPeopleId, getPeopleImg} from '../../service/getPeopleData';
import PeopleList from '../../components/PeopleList/PeopleList';

const PeoplePage = () => {

    const [people, setPeople] = useState(null)

    const getResource = async (url) => {
        const res = await getApiResource(url)

        const peopleList = res.results.map(({name, url}) => {

            const id = getPeopleId(url)
            const img = getPeopleImg(id)

            return {
                id,
                name,
                img
            }
        })
        setPeople(peopleList)
    }

    useEffect(() => {
        getResource(API_PEOPLE)
    }, [])

    return (
        <>
            {people && (
                <PeopleList people={people}/>
            )}
        </>
    );
};

export default PeoplePage;