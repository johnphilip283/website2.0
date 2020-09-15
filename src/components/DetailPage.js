import React from 'react';
import { useParams } from "react-router-dom";
import '../styles/DetailPage.scss';

const cards = require('./cards.json');

const DetailPage = ({ }) => {

  let { route } = useParams();

  const chosenCard = cards.filter(card => card.route === route)[0];
  
  const { projectTitle, timePeriod, technologiesUsed, company, background, solution, relatedLink, route: cardRoute } = chosenCard;
  
  return (
    <div className="detail-container">
      <div className="image">
        <img src="" alt=""/>
      </div>
      <div className="content">
        <p>{projectTitle}</p>
        <p>{timePeriod}</p>
        {company && <p>{company}</p>}
        <p>{background}</p>
        <p>{solution}</p>
        {technologiesUsed && <ul>{technologiesUsed.map((tech, idx) => <li key={idx}>{tech}</li>)}</ul>}
        {relatedLink && <a dangerouslySetInnerHTML={{__html: relatedLink}} />}
      </div>
    </div>
  );
}

export default DetailPage;