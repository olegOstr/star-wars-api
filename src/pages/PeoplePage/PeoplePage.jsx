import React, {useState, useEffect} from 'react';
import './PeoplePage.module.css';

import {getApiResource} from '../../service/network';
import {API_PEOPLE} from '../../constants/api';
import {getPeopleId, getPeopleImg} from '../../service/getPeopleData';
import PeopleList from '../../components/PeopleList/PeopleList';
import {withErrorApi} from '../../hoc-helpers/withErrorApi';

const PeoplePage = ({setErrorApi}) => {

    const [people, setPeople] = useState(null)

    const getResource = async (url) => {
        const res = await getApiResource(url)

        if (res) {
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
            setErrorApi(false)

        } else {
            setErrorApi(true)
        }
    }

    useEffect(() => {
        getResource(API_PEOPLE)
    }, [])

    return (
        <>
            <h1>Nav Menu</h1>
            {people && <PeopleList people={people}/>}
        </>
    );
};

export default withErrorApi(PeoplePage);