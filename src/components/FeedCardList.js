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

  const { projectTitle, description, route, role, timePeriod } = card;

  return (
    <li>
      <Link to={window.location.pathname + '/' + route}>
        <article className="feed-card">
          <div className="offset-header">
            <h1>{projectTitle}</h1>
          </div>
          <h4>{description}</h4><br/>
          <p>Role: {role}</p>
          <p>When: {timePeriod}</p>
        </article>
      </Link>
    </li>
  );
}

export default FeedCardList;
