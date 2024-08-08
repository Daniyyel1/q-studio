import React from 'react'
import { TrendingWrapper } from '../styles'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLongLeft,HiOutlineArrowLongRight } from "react-icons/hi2";
import lambo from '../../assets/lambo.jpg'
import { CiPlay1 } from "react-icons/ci";

const Trending = () => {
  return (
    <TrendingWrapper className="genLayout">
       <div className="topTitle">
        <h3>today's trending</h3>
        <Link to="#">View all</Link>
       </div>
         
        <div className="trendIcons">
        <HiOutlineArrowLongLeft style={{fontSize:"32px",opacity:".6"}} />
        <HiOutlineArrowLongRight style={{fontSize:"32px",opacity:".6"}} />
        </div>

        <div className="trendBoxWrapper">
            <div className="trendBox">
                <img src={lambo} alt='lambo' />

                <div className="bgInfo">
                <span>Feb 11 . 12 min</span>
                <span>-by elen jhosh</span>
            </div>
            <h2> Brit in America Makes Sense of the Meghan Markle Oprah Interview</h2>
            </div>
            <div className="trendBox">
            <img src={lambo} alt='lambo' />
            <div className="bgInfo">
                <span>Feb 11 . 12 min</span>
                <span>-by elen jhosh</span>
            </div>
            <h2>In Deborah Robert's, an Interrogation of What Society Imposes on Black Children</h2>
            </div>
            <div className="trendBox">
            <img src={lambo} alt='lambo' />
            <div className="bgInfo">
                <span>Feb 11 . 12 min</span>
                <span>-by elen jhosh</span>
            </div>
            <h2>Spring Skirts Have Sprung - 6 Ways to Wear Them All Season Long</h2>
            </div>
        </div>
    </TrendingWrapper>
  )
}

export default Trending