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

  const { projectTitle, timePeriod, technologiesUsed, company, background, solution, relatedLink, route } = card;

  return (
    <li>
      <Link to={window.location.pathname + '/' + route}>
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
            {technologiesUsed && technologiesUsed.map((tech, idx) => <li className="tech-items" key={idx}>{tech}</li>)}
          </ul>
        </div>
      </Link>
    </li>
  );
}

export default FeedCardList;
