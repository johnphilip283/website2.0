import React from 'react';
import EventPage from './EventPage';
import Navbar from './Navbar';
import '../styles/App.scss';

const App = () => 
  <div className="app"> 
    <Navbar />
    <EventPage />
  </div>
  
export default App;