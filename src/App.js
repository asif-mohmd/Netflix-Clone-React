import './App.css';
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { originals, action, trending } from './urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title='Action Movies' isSmall />
      <RowPost url={trending} title='Trending Movies' isSmall />


    </div>
  );
}

export default App;
