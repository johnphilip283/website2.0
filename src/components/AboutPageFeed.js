import React from 'react';
import styles from "../styles/AboutPageFeed.module.scss"

console.log(styles);

const AboutPageFeed = () => 
  <div className={styles["about-page-feed"]}>
    <ul>
      <li>
        <div className="feed-item">
          hi
        </div>
      </li>
      <li>
        <div className="feed-item">
          there
        </div>
      </li>
    </ul>
  </div>


export default AboutPageFeed;