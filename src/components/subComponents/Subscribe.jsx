import React from 'react'
import { SubscribeWrapper } from '../styles'

const Subscribe = () => {
  return (
    <SubscribeWrapper className='genLayout'>
        <div className="subscribe__content">
            <h1>subscribe to get more</h1>
            <p>Be virtually guided through interviews and video tutorials with people that have already done it (and done it well). The perks, discounts and events are the icing on the cake.</p>

            <div className="subscribe__btns">
                <button>Learn more</button>
                <button>Buy now for $10.99 (Monthly)</button>
            </div>
        </div>
    </SubscribeWrapper>
  )
}

export default Subscribe