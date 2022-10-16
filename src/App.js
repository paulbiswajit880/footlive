import React from 'react';
import './App.css';
import LiveCard from './components/LiveCard';
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import propTypes from 'prop-types';
import Table from './components/Table';
// import Leauge from './components/Leauge';
// import CupTable from './components/CupTable';
// import CupTable from './components/CupTable';


function App() {

  return (
    <>
    
    <Router>
    <Navbar  />
    
      {/* <CupTable/> */}
      <Routes>
      <Route exact path='/' element=<LiveCard />/>
        <Route exact path='/premierleauge' element=<Table leaugeid={152} lname="Premier Leauge" img="/images/152_premier-league.png"/>/>
        <Route exact path='/laliga' element=<Table leaugeid={302} lname={"Laliga"} img="/images/302_la-liga.png"/>/>
        <Route exact path='/serie_a' element=<Table leaugeid={207} lname={"Serie-A"} img="/images/Lega-Serie-A.jpg"/>/>
        <Route exact path='/bundesliga' element=<Table leaugeid={175} lname={"Bundesliga"} img="/images/171_2.-bundesliga.png"/>/>
        <Route exact path='/ligue_1' element=<Table leaugeid={168} lname={"Ligue-1"} img="/images/168_ligue-1.png"/>/>
        <Route exact path='/primeiraliga' element=<Table leaugeid={266} lname={"Primeira liga"} img="/images/images.png"/>/>
        <Route exact path='/eredivise' element=<Table leaugeid={244} lname={"Eredivise"} img="/images/244_eredivisie.png"/>/>
        <Route exact path='/isl' element=<Table leaugeid={566} lname={"Indian Super League"} img="/images/566_indian-super-league.png"/>/>
      </Routes>
    </Router>

     </>
  );
}
Table.propTypes=  {
  leaugeid:propTypes.number,
  lname:propTypes.string,
  img:propTypes.string,
}
export default App;
