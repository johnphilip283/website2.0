import React from 'react';
import FeedCardList from './FeedCardList';
import '../styles/ProjectsPageFeed.scss';

const cards = require('./cards.json');

const ProjectsPageFeed = () => {
  return (
    <div className="projects-page-feed">
      <FeedCardList cards={cards}/>
    </div>
  );
}

export default ProjectsPageFeed;