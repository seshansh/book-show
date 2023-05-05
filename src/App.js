import React, {  useState } from 'react';
import './App.css';
import AppHeader from "./components/header/AppHeader";
import Home from './components/home/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import MovieDetail from './components/movieDetail/MovieDetail';
 

  const App=() =>{
    const [singleData,setSingleData]=useState(null);

    return (
      <div className="App">
        <Router>
        <AppHeader />
          <Routes>
          <Route path='/' exact element={<Home setSingleData={setSingleData} />} />
          <Route path='/detail' exact element={singleData ?<MovieDetail details={singleData} />:<Home />} />
          </Routes>
        </Router>
      </div>
    );
  }


export default App;
