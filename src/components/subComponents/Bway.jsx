import React from 'react'
import { Link } from 'react-router-dom'
import { BWrapper } from '../styles'

const Bway = () => {
  return (
    <BWrapper>
        <div className="topTitle">
        <h3>BESTSELLERS OF THE MONTH</h3>
        <Link to="#">View all</Link>
       </div>
         
    </BWrapper>
  )
}

export default Bway