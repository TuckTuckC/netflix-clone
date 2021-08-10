import React from 'react';
import './App.css';
import Row from './conponents/Row';
import requests from './config/requests';

function App() {
  return (
    <div className="App">
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
    </div>
  );
};

export default App;
