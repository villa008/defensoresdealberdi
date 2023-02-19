import React from 'react'
import escudo from "../../images/escudo/escudo.jpg"
import "./header.css"
import {Link} from "react-router-dom"

export const Header = () => {
    return (
        <header>
            
            <Link to='Inicio'>
                <div className= "logo">
                    <img src={escudo} alt="logo" width="130"/>
                </div>
            </Link>
            <ul>
                <li>
                    <Link to='Inicio'>Club</Link>
                </li>
                <li>
                    <Link to='#'>Futbol</Link>
                </li>
                <li>
                    <Link to='Primera'>Primera</Link>
                </li>
                <li>
                    <Link to='Juveniles'>Juveniles</Link>
                </li>
                <li>
                    <Link to='Infantiles'>Infantiles</Link>
                </li>
                <li>
                    <Link to='#'>Archivo</Link>
                </li>
                <li>
                    <Link to='#'>Contacto</Link>
                </li>
            </ul>
            <div className='cart'>
                <box-icon name="cart"></box-icon>
                <span className='item_total'>0</span>
            </div>
        </header>
    )
}
