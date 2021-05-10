import React from 'react';
import './App.module.css';

import PeoplePage from '../pages/PeoplePage/PeoplePage';
import {BrowserRouter as Router} from 'react-router-dom';

const App = () => {

    return (
        <>
            <Router>
                <PeoplePage/>
            </Router>
        </>
    );
}

export default App;
