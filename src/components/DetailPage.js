import React from 'react';
import { useParams } from "react-router-dom";
import '../styles/DetailPage.scss';

const cards = require('./cards.json');

const DetailPage = () => {

  let { route } = useParams();

  const chosenCard = cards.find(card => card.route === route);
  
  const { projectTitle, timePeriod, technologiesUsed, company, background, solution, relatedLink, role, images, video } = chosenCard;
  
  const techMarkup = techList =>
    <section className="inline-section">
      <h5><span className="section-accent">Technologies Used</span>: </h5>
      <ul className="tech-items">
        {techList.map((tech, idx) => <li className="tech-item" key={idx}>{tech}</li>)}
      </ul>
    </section>
  
  const relatedLinkMarkup = link => 
    <section className="inline-section">
      <h5><span className="section-accent">Related Link</span>: </h5>
      <a className="related-link" href={link.link} dangerouslySetInnerHTML={{__html: link.text}} />
    </section>

  return (
    <article className="detail-container">
      <div className="media">
        {
          video && <video src={video.src} width={500} loop controls playsInline muted aria-label={video.ariaLabel} poster={video.posterSrc} autoPlay></video>
        }
        {
          images && images.map((image, idx) => <img key={idx} src={image.path} width={500} alt={image.altText}/>)
        }
      </div>
      <section className="content">
        <h1>{projectTitle}</h1>
        <div className="inline-section">
          <h5><span className="section-accent">Role</span>: </h5>
          <span> {role}</span>
        </div>
        <div className="inline-section">
          <h5><span className="section-accent">When</span>: </h5>
          <span> {timePeriod}</span>
        </div>
        {
          company && 
            <div className="inline-section">
              <h5><span className="section-accent">Company</span>: </h5>
              <span> {company}</span>
            </div>
        }
        <section className="margin-1">
          <h4><span className="section-accent">Background</span>:</h4>
          <p dangerouslySetInnerHTML={{__html: background}}/>
        </section>
        <section className="margin-1">
          <h4><span className="section-accent">Solution</span>:</h4>
          <p dangerouslySetInnerHTML={{__html: solution}}/>
        </section>
        
        {technologiesUsed && techMarkup(technologiesUsed)}
        {relatedLink && relatedLinkMarkup(relatedLink)}
      </section>
    </article>
  );
  
}

export default DetailPage;