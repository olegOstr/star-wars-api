import React from 'react';
import {useSelector} from 'react-redux';

const FavoritePage = () => {

    const storeData = useSelector(state => state.favoriteReducer)

    return (
        <div>
            <h3>Fav</h3>
        </div>
    );
};

export default FavoritePage;