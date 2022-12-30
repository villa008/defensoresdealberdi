import React from 'react'
import escudo from "../../images/escudo/escudo.jpg"
import "./header.css"

export const Header = () => {
    return (
        <header>
            
            <a href='#'>
                <div className= "logo">
                    <img src={escudo} alt="logo" width="130"/>
                </div>
            </a>
            <ul>
                <li>
                    <a href='#'>Club</a>
                </li>
                <li>
                    <a href='#'>Futbol</a>
                </li>
                <li>
                    <a href='#'>Primera</a>
                </li>
                <li>
                    <a href='#'>Juveniles</a>
                </li>
                <li>
                    <a href='#'>Infantiles</a>
                </li>
                <li>
                    <a href='#'>Archivo</a>
                </li>
                <li>
                    <a href='#'>Contacto</a>
                </li>
            </ul>
            <div className='cart'>
                <box-icon name="cart"></box-icon>
                <span className='item_total'>0</span>
            </div>
        </header>
    )
}
