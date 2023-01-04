import React from 'react'
import IMG from "../../images/Players/img00.jpg"
import "./Players.css"

export const PlayersList = () => {
  return (
    <>
      <h1 className="title">Jugadores Defensores Alberdi</h1>
      <div className='players'>
        <a href='#'>
          <div className='player'>
            <img src={IMG} alt="" width="200" />
          </div>
        </a>
        <div className='player_footer'>
          <h1>Title</h1>
          <p>Categoria</p>
          <p className='price'>32</p>
        </div>
        <div className='buttom'>
          <buttom className='btn'>
            Añadir
          </buttom>
          <div>
            <a href='#' className='btn'>vista</a>
          </div>

        </div>

      </div>

    </>

  )
}
