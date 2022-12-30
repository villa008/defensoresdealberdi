import React from 'react';
import { PlayersList } from './components/players/Players';
import { Header } from './components/header/Header';
import 'boxicons';
import { Footer } from './components/Footer/Footer';
import { Footer2 } from './components/Footer/Footer2';



function App() {
  return (
    <div className='App'>

      <Header />
      <br />
      <PlayersList />

    </div>

  );
}

export default App;
