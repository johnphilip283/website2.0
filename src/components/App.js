import React from 'react';
import '../styles/App.scss';
import Backdrop from "./Backdrop";
import Timeline from "./Timeline";
import Intro from "./Intro";

const App = () => {
  return (
    <div className="app">
      <Intro />
      <Backdrop />
      <Timeline />
    </div>
  );
};

export default App;