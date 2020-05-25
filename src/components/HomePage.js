import React, { useState, useEffect, useRef } from 'react';
import '../styles/HomePage.scss';

const HomePage = () => {

  const textRef = useRef();

  const choices = ['writing code that brings joy.', 'fried chicken.', 'potatoes.'];
  let i = 0;

  console.table(textRef);

  useEffect(() => {

    const fadeText = () => {
      textRef.current.style.opacity = 0;
      setTimeout(() => {
        i = (i + 1) % choices.length;
        textRef.current.innerText = choices[i];
      }, 1000);
      setTimeout(() => textRef.current.style.opacity = 1, 1000);
    }
  
    const interval = setInterval(fadeText, 5000);

    return () => clearInterval(interval);

  }, [textRef]);

  return (
    <div className='home-page'>
      <div className='welcome'>
        Hi! I'm John <span role="img" aria-label="hand wave emoji">👋🏾</span>.<br/>
        I like <span ref={textRef} id="welcome-text">writing code that brings joy.</span>
      </div>
    </div>
  )
}
  

export default HomePage;