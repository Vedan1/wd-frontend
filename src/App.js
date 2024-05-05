import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/card';
import React from 'react';
import LandingPage from './Components/LandingPage/landingPage';
import NCard from './Components/Card/nCard';
function App() {
  return (
    <div className="App" style={{margin: "2rem"}}>
      <LandingPage />
      {/* <NCard /> */}
    </div>
  );
}

export default App;
