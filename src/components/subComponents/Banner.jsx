import React from 'react'
import lambo from '../../assets/lambo.jpg'
import { BannerWrapper } from '../styles'

const Banner = () => {
  return (
    <BannerWrapper className='genLayout'>
        <div className="bigBanner">
            <img src={lambo} alt='lambo' />
            <div className="bgInfo">
                <span>Feb 11 . 5 min read</span>
                <span>-by elen jhosh</span>
            </div>
            <h1>what designers, photographers, and other insiders missed about paris fashion week</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, quos repellendus autem optio quaerat placeat quod magnam, suscipit perferendis similique tenetur laudantium! Totam, magni eius.</p>
        </div>
         <div className="bgBannerPosts">
            <div className="bannerPostCard">
                <img src={lambo} alt='lambo'/>
                <div className="postCardInfo">
                    <span>Feb 11 . 5 in read</span>
                    <span>- elen jhosh</span>
                </div>
                <h2>what happens when one partner is vaccinated and the other isn't?</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque amet exercitationem repudiandae molestias eaque iusto.</p>
            </div>
            <div className="bannerPostCard">
               <img src={lambo} alt='lambo' />
               <div className="postCardInfo">
                <span>Feb 11 . 5 min read</span>
                <span>- elen jhosh</span>
               </div>
               <h2>what happens when one partner is vaccinated and the other isn't?</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quas, quod beatae blanditiis nostrum error.</p>
            </div>
         </div>
    </BannerWrapper>
  )
}

export default Banner