import React from 'react';
import './App.module.css';

import PeoplePage from '../pages/PeoplePage/PeoplePage';
import {BrowserRouter as Router} from 'react-router-dom';

const App = () => {

    return (
        <>
            <h1>Star Wars API</h1>
            <Router>
                <PeoplePage/>
            </Router>
        </>
    );
}

export default App;
