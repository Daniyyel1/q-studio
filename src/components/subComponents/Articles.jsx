import React from 'react'
import { ArticlesWrapper } from '../styles'
import { Link } from 'react-router-dom'
import lambo from '../../assets/lambo.jpg'


const Articles = () => {
  return (
    <ArticlesWrapper className='genLayout'>
        <div className="topArticles">
        <h3>the Latest Articles</h3>
        <Link to="#">View all</Link>
        </div>
        <div className="artWrapper">
            <div className="artBox">
                <img src={lambo} alt='lambo' />
                <div className="artInfo">
                <span>by elen jhosh</span> 
                <h3>The Definite Helmut Newton Photobook Is Reissued-in Miniature-for His 100th Birthday</h3>
                <p>The photographer,whose provacative work rose to prominense in the 1970s against the backdrop of the second-wave feminist movement, was one of the most impactful visual creators of his time</p>
                <span>Feb 11 -      5 min read</span>
                </div>
            </div>

            <div className="artBox">
            <img src={lambo} alt='lambo' />
                <div className="artInfo">
                    <span>by elen jhosh</span>
                    <h3>Made You Look : A True Story About Fake Art - When Wanting to Believe Is Just Not Enough</h3>
                    <p>The story of the most significant art fraud in history where ruined reputations and wounded egos mattered more than money</p>
                    <span>Feb 11 -      5 min read</span>
                </div>

            </div>

            <div className="artBox">
            <img src={lambo} alt='lambo' />
                <div className="artInfo">
                   <span>by elen jhosh</span>
                   <h3>5 Things White People Keep Getting Totally Wrong About Racism</h3>
                   <p>They want to escape the harsh, unforgiving glare of culpability by pretending they ve done nothing wrong, that if there are ongoing issues with racism in this country, it has nothing to do with how they raise their children. It's because Black people refuse to move on.</p>
                   <span>Feb 11 -      5 min read</span>
                </div>

            </div>

            <div className="artBox">
            <img src={lambo} alt='lambo' />
                <div className="artInfo">
                  <span>by elen jhosh</span>
                  <h3>In London, the Most Famous "Great Woman Artist" Finally Gets Her Due</h3>
                  <p>In July 2018, London's National Gallery acquired a self-portrait by the Baroque artist Artemisia Gentileschi, featuring the painter in the guise of Saint Catherine of Alexandria. Almast immediately, it drew an unprecedented level of media attention.</p>
                  <span>Feb 11 -      5 min read</span>
                </div>

            </div>
        </div>
    </ArticlesWrapper>
  )
}

export default Articles