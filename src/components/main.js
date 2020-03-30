import React from 'react';
import LandingPage from './landingpage';
import { Switch, Route } from 'react-router-dom';
import Resume from './resume';
import About from './aboutme';
import Contact from './contact';
const Main = () => (
    <Switch>
        <Route exact path = "/" component={LandingPage} />
        <Route path = "/resume" component={Resume} />
        <Route path = "/aboutme" component={About} />
        <Route path = "/contact" component={Contact} />
    </Switch>
)


export default Main;