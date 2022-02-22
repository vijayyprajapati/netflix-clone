import React from "react";
import "./App.css";
import Banner from "./Banner";
import Header from "./Header";
import requests from "./request";
import Row from "./Row";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Row
        isLargeRow={true}
        title="NETFLIX ORIGNALS"
        fetchUrl={requests.fetchNetFlixOriginals}
      />

      <Row title="Trending Now" fetchUrl={requests.fetchTreding} />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />

      <Row title="Horror Movies" fetchUrl={requests.fetchHorroMovies} />

      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />

      <Row title="Romance Movies" fetchUrl={requests.fetchRomanticMovies} />

      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
