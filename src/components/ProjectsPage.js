import React from 'react';
import FeedCardList from './FeedCardList';
import "../styles/ProjectsPage.scss";

const cards = require('./cards.json');

const ProjectsPage = () => 
  <div class="projects-page-feed">
    <FeedCardList cards={cards} />
  </div>

export default ProjectsPage;