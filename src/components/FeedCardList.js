import React from 'react';
import '../styles/FeedCardList.scss';
import '../styles/FeedCard.scss';
import { Link } from 'react-router-dom';

const FeedCardList = ({ cards }) => {
  return (
    <ul className="feed-card-list">
      {cards.map((card, idx) => <FeedCard card={card} key={idx}/>)}
    </ul>
  );
}
 
const FeedCard = ({ card }) => {

  const { projectTitle, description, route } = card;

  return (
    <li>
      <Link to={window.location.pathname + '/' + route}>
        <div className="feed-card">
          <div className="offset-header"><h1>{projectTitle}</h1></div>
          <h3>{description}</h3>
        </div>
      </Link>
    </li>
  );
}

export default FeedCardList;
