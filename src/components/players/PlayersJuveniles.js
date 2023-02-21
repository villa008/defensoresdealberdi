import React from 'react'
import Images from '../../imgjuveniles/Images'
import { RViewerTrigger, RViewer } from "react-viewerjs"
import "./Players.css"

export const PlayersJuveniles = () => {
  return (
    <>
      <h1 className="title">Jugadores Juveniles</h1>
      <div className='players'>

        <div className='player'>
          <a href='#'>
            <div className='player_imag'>
              <img src={Images[0].img} alt="" width="200" />
            </div>
          </a>
          <div className='player_footer'>
            <h1>{Images[0].Nombre}</h1>
            <p>{Images[0].Nacimiento}</p>
            <p>{Images[0].Posicion}</p>
          </div>
        </div>

        <div className='player'>
          <a href='#'>
            <div className='player_imag'>
              <img src={Images[0].img} alt="" width="200" />
            </div>
          </a>
          <div className='player_footer'>
            <h1>{Images[0].Nombre}</h1>
            <p>{Images[0].Nacimiento}</p>
            <p>{Images[0].Posicion}</p>
          </div>
        </div>

        <div className='player'>
          <a href='#'>
            <div className='player_imag'>
              <img src={Images[0].img} alt="" width="200" />
            </div>
          </a>
          <div className='player_footer'>
            <h1>{Images[0].Nombre}</h1>
            <p>{Images[0].Nacimiento}</p>
            <p>{Images[0].Posicion}</p>
          </div>
        </div>

        <div className='player'>
          <a href='#'>
            <div className='player_imag'>
              <img src={Images[0].img} alt="" width="200" />
            </div>
          </a>
          <div className='player_footer'>
            <h1>{Images[0].Nombre}</h1>
            <p>{Images[0].Nacimiento}</p>
            <p>{Images[0].Posicion}</p>
          </div>
        </div>

        <div className='player'>
          <a href='#'>
            <div className='player_imag'>
              <img src={Images[0].img} alt="" width="200" />
            </div>
          </a>
          <div className='player_footer'>
            <h1>{Images[0].Nombre}</h1>
            <p>{Images[0].Nacimiento}</p>
            <p>{Images[0].Posicion}</p>
          </div>
        </div>










      </div>

    </>

  )
}