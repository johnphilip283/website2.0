import React from 'react';
import ProjectsPageFeed from './ProjectsPageFeed';
import DetailPage from './DetailPage';
import { Switch, Route } from 'react-router-dom';

import "../styles/ProjectsPage.scss";

const ProjectsPage = ({ match }) => {

  return (
    <Switch>
      <Route path={`${match.path}/:route`} component={DetailPage}/>
      <Route path={match.path} component={ProjectsPageFeed}/>
    </Switch>
  )
}

export default ProjectsPage;