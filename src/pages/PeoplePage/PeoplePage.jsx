import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {withErrorApi} from '../../hoc-helpers/withErrorApi';
import PeopleList from '../../components/PeoplePage/PeopleList/PeopleList';
import {getApiResource, changeHTTP} from '../../service/network';
import {getPeopleId, getPeopleImg, getPeoplePageId} from '../../service/getPeopleData';
import {API_PEOPLE} from '../../constants/api';
import {useQueryParams} from '../../hooks/useQueryParams';
import PeopleNavigation from '../../components/PeoplePage/PeopleNavigation/PeopleNavigation';
import styles from './PeoplePage.module.css';
import UiLoading from '../../components/UI/UiLoading/UiLoading';

const PeoplePage = ({setErrorApi}) => {

    const query = useQueryParams();
    const queryPage = query.get('page')
    const [people, setPeople] = useState(null)
    const [prevPage, setPrevPage] = useState(null)
    const [nextPage, setNextPage] = useState(null)
    const [counterPage, setCounterPage] = useState(1)
    const [isLoad, setIsLoad] = useState(false)


    const getResource = async (url) => {
        setIsLoad(true)
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
            setIsLoad(false)
        } else {
            setErrorApi(true)
        }
    };

    useEffect(() => {

        getResource(API_PEOPLE + queryPage)

    }, [setErrorApi, queryPage]);

    return (
        <div className={styles.container}>
            <PeopleNavigation
                getResource={getResource}
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}
            />
            {isLoad ? <UiLoading theme='white'/> : people && <PeopleList people={people}/>}
        </div>
    );
};

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
};

export default withErrorApi(PeoplePage);