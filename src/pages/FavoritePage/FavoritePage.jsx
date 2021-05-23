import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import PeopleList from '../../components/PeoplePage/PeopleList/PeopleList';
import {motion} from 'framer-motion'

const FavoritePage = () => {

    const [person, setPerson] = useState([]);

    const storeData = useSelector(state => state.favoriteReducer)

    useEffect(() => {
        const arr = Object.entries(storeData)

        if (arr.length) {
            const result = arr.map((item) => {

                return {
                    id: item[0],
                    ...item[1]
                }
            })

            setPerson(result)
        }

    }, [storeData])

    return (

        <motion.div initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.7, delay: .2}}
        >
            <h3 className='header__text'>Favorite Page</h3>
            {person.length ? <PeopleList people={person}/> : <h2>No Favorite Person</h2>}
        </motion.div>

    );
};

export default FavoritePage;