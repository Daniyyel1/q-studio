import React from 'react'
import PodcastsShopCard from './PodcastsShopCard';
import { Items } from "../../Data";

const PodcastsCard = () => {
  return (
    <div className='podcastsWrapper'>

      {Items[2].podcastsBooks?.map((podcastsBook) =>{
        return <PodcastsShopCard item={podcastsBook} key={podcastsBook} />;
      })}

    </div>
  )
}

export default PodcastsCard