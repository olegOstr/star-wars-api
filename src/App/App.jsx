import React from 'react';
import styles from './App.module.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routesConfig from '../routes/routesConfig';
import Header from '../components/Header/Header';
import {Provider} from 'react-redux';
import store from '../store/store';

const App = () => {

    return (
        <Provider store={store}>
            <Router>
                <div className={styles.wrapper}>

                    <Header/>

                    <Switch>
                        {routesConfig.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}/>
                        ))}
                    </Switch>

                </div>
            </Router>
        </Provider>
    );
}

export default App;
