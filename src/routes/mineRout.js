import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from "./Contact";

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
            </Switch>
        </BrowserRouter>
    );
};