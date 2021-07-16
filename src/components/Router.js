import React from 'react'
import {Switch, Route } from "react-router-dom"

import HomePage from '../components/HomePage'
import BeansContainer from './BeansContainer'
import AboutBeans from '../components/AboutBeans'
import BeansList from './components/BeansList'

const Router = () => {
    return (
    <div>
        <Switch> 
            <Route exact path='/home' component={HomePage} /> 
            <Route exact path='/about' component={AboutBeans} /> 
        <Route exact path='/beans' component={BeansContainer} />   
        </Switch>

    </div>
    );
};

export default Router;

