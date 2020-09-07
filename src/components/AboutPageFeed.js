import React from 'react';
import FeedCardList from './FeedCardList';
import "../styles/AboutPageFeed.scss";

const cards = require('./cards.json');

const AboutPageFeed = () => 
  <div className="about-page-feed">
    <FeedCardList cards={cards} />
  </div>


export default AboutPageFeed;