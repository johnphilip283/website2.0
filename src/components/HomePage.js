import React, { useState, useEffect, useRef } from 'react';
import '../styles/HomePage.scss';
import '../styles/animation.scss';
import SocialBar from './SocialBar';

const HomePage = () => {

  const textRef = useRef();

  const choices = [
    'writing code that brings joy ♥️.', 
    'working on fun problems with cool 😎 people.',
    'bringing good vibes.',
    'constantly learning more about the world 📈.',
    'bringing tech + social good 👨🏽‍💻 together.',
  ];

  useEffect(() => {
    let i = 0;
    const fadeText = () => {
      const { current } = textRef;
      if (current) {
        setTimeout(() => current.innerHTML = choices[++i % choices.length], 1000);
        current.style.opacity = 0;
        setTimeout(() => current.style.opacity = 1, 1000);
      }
    }
  
    const interval = setInterval(fadeText, 3000);
    return () => clearInterval(interval);

  }, [textRef, choices]);

  return (
    <div className='home-page'>
      <div className='welcome'>
        Hi! I'm John.<br/>
        <div className='welcome-body subline'>
          I like <span ref={textRef} id="welcome-text">{choices[0]}</span>
        </div>
        <p className='welcome-body description'>
          I'm a Master's student studying Computer Science at Northeastern University,
          concentrating in Artificial Intelligence and Human-Computer Interaction. 
          When I'm not doing homework, I work as a software engineer at <a href='www.buzzfeed.com' className='bzfd-link'>BuzzFeed</a>, 
          working on the Frontend Infrastructure team. When I'm not studying or working, 
          I'm probably trying to learn something new, dreaming of eating halal food, or spending too much time on TikTok.
        </p>
        <SocialBar/>
      </div>
      <div className="animation">
        <div class="container">
          <div class="avatar-hair"></div>
          <div class="avatar-head"></div>
          <div class="avatar-neck"></div>
          <div class="eyes"></div>
          <div class="ears"></div>
          <div class="glasses">
            <div class="left">
              <div class="shine"></div>
            </div>
            <div class="right">
              <div class="shine"></div>
            </div>
          </div>
          <div class="bridge"></div>
          <div class="shine"></div>
          <div class="mouth">
            <div class="smile">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
  

export default HomePage;