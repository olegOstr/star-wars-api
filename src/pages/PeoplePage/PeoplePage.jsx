import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {withErrorApi} from '../../hoc-helpers/withErrorApi';
import PeopleList from '../../components/PeopleList/PeopleList';
import {getApiResource} from '../../service/network';
import {getPeopleId, getPeopleImg} from '../../service/getPeopleData';
import {API_PEOPLE} from '../../constants/api';

import './PeoplePage.module.css';

const PeoplePage = ({setErrorApi}) => {

    const [people, setPeople] = useState(null)

    useEffect(() => {
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
        getResource(API_PEOPLE)
    }, [setErrorApi])

    return (
        <>
            <h1 className='header__text'>People Page</h1>
            {people && <PeopleList people={people}/>}
        </>
    );
};

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);