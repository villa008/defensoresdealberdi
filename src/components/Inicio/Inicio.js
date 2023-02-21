import React from 'react'
import Portada from "../../images/Portada/portada.jpeg";
import { Link } from "react-router-dom";


export const Inicio = () => {
  return (

    <div className='inicio'>

      <h1 className='title'>
        El “Defe” nació el 29 de octubre de 1988 tras la gesta de Carlos Elías (presidente hasta el día de hoy)
        y el acompañamiento de un grupo de padres.
        El destino quiso que el club se llame Defensores de Alberdi tras una elección a la vieja usanza y con
        dos opciones de votación (Defensores o Deportivo Herman). Tras ocho años de participación en Primera C
        de Liga, los “azules” ascendieron invictos a la Primera B.
        Sus instalaciones estuvieron asentadas en calle Entre Ríos al 1750, en un predio de dos hectáreas de
        extensión. Tras sufrir algunos hechos de vandalismo, la institución canjeó otro terreno con la
        Municipalidad de la ciudad y desde 2005 se encuentra en Luis Pasteur al 384 (a metros del Centro Cívico).
      </h1>

      <Link to="/Primera">
        <h1 className='title'>Primera</h1>
      </Link>
      <img src={Portada} alt="inicio" />
    </div>
  )
}
