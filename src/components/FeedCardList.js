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

  const { projectTitle, timePeriod, technologiesUsed, company, background, solution, relatedLink } = card;

  return (
    <li>
      <div className="feed-card">
        <div className="offset-header"><h1>{projectTitle}</h1></div>
        { company && <p>Company: {company}</p>}
        <h3>Background: </h3>
        <p dangerouslySetInnerHTML={{__html: background}} />
        <h3>Solution: </h3>
        <p dangerouslySetInnerHTML={{__html: solution}} />
        <p>{timePeriod}</p>
        {relatedLink && <p>Related Link : {relatedLink}</p>}
        <ul>
          {technologiesUsed && technologiesUsed.map(tech => <li className="tech-items">{tech}</li>)}
        </ul>
      </div>
    </li>
  );
}

export default FeedCardList;
