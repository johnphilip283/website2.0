import React from 'react';
import AboutPageFeed from './AboutPageFeed';
import { Switch, Route } from 'react-router-dom';

const AboutPage = ({ match }) => 
  
  <Switch>
    <Route path={`${match.path}/hackNY`} component={() => <div>hackNY</div>}/>
    <Route path={match.path} component={AboutPageFeed}/>
  </Switch>


export default AboutPage;