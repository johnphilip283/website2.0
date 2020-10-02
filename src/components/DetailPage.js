import React from 'react';
import { useParams } from "react-router-dom";
import '../styles/DetailPage.scss';

const cards = require('./cards.json');

const DetailPage = () => {

  let { route } = useParams();

  const chosenCard = cards.find(card => card.route === route);
  
  const { projectTitle, timePeriod, technologiesUsed, company, background, solution, relatedLink, role, images, video } = chosenCard;
  
  const techMarkup = techList =>
    <div class="inline-section">
      <h5><span class="section-accent">Technologies Used</span>: </h5>
      <ul class="tech-items">{techList.map((tech, idx) => <li className="tech-item" key={idx}>{tech}</li>)}</ul>
    </div>
  
  const relatedLinkMarkup = link => 
    <div class="inline-section">
      <h5><span class="section-accent">Related Link</span>: </h5>
      <a className="related-link" href={link.link} dangerouslySetInnerHTML={{__html: link.text}} />
    </div>

  return (
    <div className="detail-container">
      <div className="image">
        {
          video && <video src={video.src} width={500} loop controls playsInline muted aria-label={video.ariaLabel} poster={video.posterSrc} autoPlay></video>
        }
        {
          images && images.map(image => <img src={image.path} width={500} alt={image.altText}/>)
        }
      </div>
      <div className="content">
        <h1>{projectTitle}</h1>
        <div class="inline-section">
          <h5><span class="section-accent">Role</span>: </h5>
          <span> {role}</span>
        </div>
        <div class="inline-section">
          <h5><span class="section-accent">When</span>: </h5>
          <span> {timePeriod}</span>
        </div>
        {
          company && 
            <div class="inline-section">
              <h5><span class="section-accent">Company</span>: </h5>
              <span> {company}</span>
            </div>
        }
        <div class="margin-1">
          <h4><span class="section-accent">Background</span>:</h4>
          <p dangerouslySetInnerHTML={{__html: background}}/>
        </div>
        
        <div class="margin-1">
          <h4><span class="section-accent">Solution</span>:</h4>
          <p dangerouslySetInnerHTML={{__html: solution}}/>
        </div>
        
        {technologiesUsed && techMarkup(technologiesUsed)}
        {relatedLink && relatedLinkMarkup(relatedLink)}
      </div>
    </div>
  );
  
}

export default DetailPage;