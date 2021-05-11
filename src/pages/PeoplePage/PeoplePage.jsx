import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {withErrorApi} from '../../hoc-helpers/withErrorApi';
import PeopleList from '../../components/PeopleList/PeopleList';
import {getApiResource, changeHTTP} from '../../service/network';
import {getPeopleId, getPeopleImg, getPeoplePageId} from '../../service/getPeopleData';
import {API_PEOPLE} from '../../constants/api';
import {useQueryParams} from '../../hooks/useQueryParams';
import PeopleNavigation from '../../components/PeopleNavigation/PeopleNavigation';
import './PeoplePage.module.css';

const PeoplePage = ({setErrorApi}) => {

    const query = useQueryParams();
    const queryPage = query.get('page')
    const [people, setPeople] = useState(null)
    const [prevPage, setPrevPage] = useState(null)
    const [nextPage, setNextPage] = useState(null)
    const [counterPage, setCounterPage] = useState(1)

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
            setPrevPage(changeHTTP(res.previous))
            setNextPage(changeHTTP(res.next))
            setCounterPage(getPeoplePageId(url))
            setErrorApi(false)

        } else {
            setErrorApi(true)
        }
    };

    useEffect(() => {
        getResource(API_PEOPLE + queryPage)
    }, [setErrorApi]);

    return (
        <>
            <PeopleNavigation
                getResource={getResource}
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}
            />
            {people && <PeopleList people={people}/>}
        </>
    );
};

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
};

export default withErrorApi(PeoplePage);