import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faTwitter, faFacebookMessenger, faMedium } from '@fortawesome/free-brands-svg-icons'
import '../styles/SocialBar.scss';

const SocialBar = () => 
  <div className='social-bar'>
    <ul>
      <li>
        <a href='https://www.linkedin.com/in/john-philip/' title="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
      </li>
      <li>
        <a href='https://twitter.com/johnphilip283' title="Twitter"><FontAwesomeIcon icon={faTwitter}/></a>
      </li>
      <li>
        <a href='https://m.me/jphilip283' title="Facebook Messenger"><FontAwesomeIcon icon={faFacebookMessenger}/></a>
      </li>
      <li>
        <a href='https://medium.com/@johnphilip_48802' title="Medium"><FontAwesomeIcon icon={faMedium}/></a>
      </li>
      <li>
        <a href='mailto:johnphilip283@gmail.com' title="Email"><FontAwesomeIcon icon={faEnvelopeOpen}/></a>
      </li>
      <li>
        <a href='/files/resume.pdf' download="John_Philip_Resume" title="Download Résumé PDF"><FontAwesomeIcon icon={faDownload}/></a>
      </li>
    </ul>
  </div>


export default SocialBar;