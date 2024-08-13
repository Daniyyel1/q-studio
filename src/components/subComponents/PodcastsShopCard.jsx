import React from 'react'
import { PodcastsShopCardWrapper } from '../styles'

const PodcastsShopCard = ({item}) => {
  return (
    <PodcastsShopCardWrapper>
    <img src={item.img} alt='book' />

    <div className="podcastInfo">
     <span>by {item.author}</span>
     <h3>{item.title}</h3>
     <p>{item.desp}</p>
     <span>{item.date}</span>
     </div>

    </PodcastsShopCardWrapper>
  )
}

export default PodcastsShopCard