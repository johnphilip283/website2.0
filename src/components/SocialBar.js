import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faTwitter, faFacebookMessenger, faMedium, faFacebook } from '@fortawesome/free-brands-svg-icons'
import '../styles/SocialBar.scss';

const SocialBar = () => 
  <div className='social-bar'>
    <ul>
      <li>
        <a href='https://www.linkedin.com/in/john-philip/'><FontAwesomeIcon icon={faLinkedinIn}/></a>
      </li>
      <li>
        <a href='https://twitter.com/johnphilip283'><FontAwesomeIcon icon={faTwitter}/></a>
      </li>
      <li>
        <a href='https://m.me/jphilip283'><FontAwesomeIcon icon={faFacebookMessenger}/></a>
      </li>
      <li>
        <a href='https://medium.com/@johnphilip_48802'><FontAwesomeIcon icon={faMedium}/></a>
      </li>
      <li>
        <a href='https://www.facebook.com/jphilip283/'><FontAwesomeIcon icon={faFacebook}/></a>
      </li>
      <li>
        <a href='mailto:johnphilip283@gmail.com'><FontAwesomeIcon icon={faEnvelopeOpen}/></a>
      </li>
    </ul>
  </div>


export default SocialBar;