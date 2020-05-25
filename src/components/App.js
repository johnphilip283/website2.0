import React from 'react';
import EventPage from './EventPage';
import Navbar from './Navbar';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../styles/App.scss';

const App = () => 
  <div className="app"> 
    <Router>
      <Route path='/' component={Navbar}/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/about' component={AboutPage}/>
        <Route path='/projects' component={ProjectsPage}/>
      </Switch>
    </Router>
  </div>
  
export default App;