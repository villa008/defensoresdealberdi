import React from 'react';
import { Header } from './components/header/Header';
import 'boxicons';
import { Footer } from './components/Footer/Footer';
import { Footer2 } from './components/Footer/Footer2';
import { BrowserRouter as Router } from "react-router-dom";
import {Ventanas} from "./components/Ventanas";


function App() {
  return (
    <div className='App'>

      <Router>
        <Header />
        <Ventanas/>

      </Router>


    </div>

  );
}

export default App;
