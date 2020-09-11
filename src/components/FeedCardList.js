import React from 'react';
import '../styles/FeedCardList.scss';
import '../styles/FeedCard.scss';

const FeedCardList = ({ cards }) => {
  return (
    <ul class="feed-card-list">
      {cards.map(card => <FeedCard card={card}/>)}
    </ul>
  );
}
 
const FeedCard = ({ card }) => {

  const { content, projectTitle, timePeriod, technologiesUsed } = card;

  return (
    <li>
      <div className="feed-card">
        <div className="offset-header"><h1>{projectTitle}</h1></div>
        <p>{timePeriod}</p>
        <div dangerouslySetInnerHTML={{__html: content}} />
        <ul>
          {technologiesUsed.map(tech => <li className="tech-items">{tech}</li>)}
        </ul>
      </div>
    </li>
  );
}

export default FeedCardList;
