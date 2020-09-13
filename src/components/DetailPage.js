import React from 'react';
import { useParams } from "react-router-dom";

const cards = require('./cards.json');

const DetailPage = ({ }) => {

  let { route } = useParams();

  const chosenCard = cards.filter(card => card.route === route)[0];

  console.log(chosenCard);
  console.log(route);
  
  const { projectTitle, timePeriod, technologiesUsed, company, background, solution, relatedLink, route: cardRoute } = chosenCard;
  
  return (
    <div className="">
      <p>{projectTitle}</p>
      <p>{timePeriod}</p>
      <p>{company}</p>
      <p>{background}</p>
      <p>{solution}</p>
      <a dangerouslySetInnerHTML={{__html: relatedLink}} />
    </div>
  );
}

export default DetailPage;