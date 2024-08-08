import React from 'react'
import { useLocation } from 'react-router-dom'
import Bway from '../subComponents/Bway';

const Books = () => {

  const location = useLocation();

  return (
    <div className='book genLayout'>
      <h1>{location.pathname.replace(/\//g, " ")}</h1>
        <Bway />
    </div>
  )
}

export default Books