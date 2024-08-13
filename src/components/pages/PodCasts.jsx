import React from 'react'
import { BookContainer } from '../styles'
import Bway from '../subComponents/Bway';
import BookCard from '../subComponents/BookCard';
import { Items } from "../../Data";
import PodcastsCard from '../subComponents/PodcastsCard';

const PodCasts = () => {
  return (
    <BookContainer className='genLayout'>

      <h1>{location.pathname.replace(/\//g, " ")}</h1>
            <Bway />

            <div className="booksWrapper">
              {Items[0].bookProducts?.map((bookProduct) => {
                return <BookCard item={bookProduct} key={bookProduct.key}/>;
              })}
            </div>

         <PodcastsCard />
    </BookContainer>
  )
}

export default PodCasts