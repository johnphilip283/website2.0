import React from 'react';
import '../styles/Avatar.scss';

const Avatar = () => 
  <div className="avatar">
    <div className="container">
      <div className="avatar-hair"></div>
      <div className="avatar-head"></div>
      <div className="avatar-neck"></div>
      <div className="eyes"></div>
      <div className="ears"></div>
      <div className="glasses">
        <div className="left">
          <div className="shine"></div>
        </div>
        <div className="right">
          <div className="shine"></div>
        </div>
      </div>
      <div className="bridge"></div>
      <div className="shine"></div>
      <div className="mouth">
        <div className="smile">
        </div>
      </div>
    </div>
  </div>


export default Avatar;