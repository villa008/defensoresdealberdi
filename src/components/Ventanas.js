import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Inicio } from "./Inicio/Inicio";
import { PlayersList } from "./players/Players"
import { PlayersJuveniles } from "./players/PlayersJuveniles"
import { PlayersInfantiles } from "./players/PlayersInfantiles"



export const Ventanas = () => {
  return (
    <section>
      <Routes>
        <Route path='/Inicio' element={<Inicio />}> </Route>
        <Route path='/Primera' element={<PlayersList />}> </Route>
        <Route path='/Juveniles' element={<PlayersJuveniles />}> </Route>
        <Route path='/Infantiles' element={<PlayersInfantiles />}> </Route>
      </Routes>
    </section>
  )
}
