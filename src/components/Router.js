import React from 'react'
import {Switch, Route } from 'react-router-dom'
import HomePage from '../components/HomePage'
import BeansContainer from '../containers/BeansContainer'
import OriginContainer from '../containers/OriginContainer'
import About from './AboutUs'
import Nav from './DefaultPage'
import VarietyComponent from './VarietyComponent'

const Router = () => {
    return (
        <div>
            <Switch> 
                <Route exact path='/' component={Nav} /> 
                <Route exact path='/home' component={HomePage} /> 
                <Route exact path='/about' component={About} />
                <Route exact path='/origins' component={OriginContainer} /> 
                <Route exact path='/beans' component={BeansContainer} />   
                <Route exact path='./varieties' component={VarietyComponent} />
            </Switch>
        </div>
    );
};

export default Router;