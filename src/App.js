import React from 'react';
import './App.css';
import Row from './conponents/Row';
import Banner from './conponents/Banner';
import requests from './config/requests';

function App() {
  return (
    <div className="app">
      
      <Banner />
      <Row 
        title='NETFLIX ORIGINALS' 
        fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow 
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default App;
