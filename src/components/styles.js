import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1rem;

  .navRight {
    width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navItems {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .navItems a {
    text-transform: capitalize;
    text-decoration: none;
    color: #000;
  }

  .navIcons {
    color: #000;
  }
`;

export const BannerWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  .bigBanner img {
    width: 100%;
    height: 75vh;
  }

  .bgInfo,
  .postCardInfo {
    display: flex;
    justify-content: space-between;
  }

  .bgInfo span,
  .postCardInfo span {
    opacity: 0.5;
    font-size: 10px;
  }

  .bgInfo span:last-child,
  .postCardInfo span:last-child {
    font-weight: 700;
    text-transform: uppercase;
  }

  .bigBanner h1 {
    margin-block: 1rem;
    text-transform: capitalize;
  }

  .bgBannerPosts {
    border: 2px solid grey;
    padding-inline: 1rem;
    border-bottom: none;
    border-right: none;
    border-top: none;
  }

  .bannerPostCard {
    margin-bottom: 0.8rem;
  }

  .bannerPostCard img {
    width: 100%;
    height: 30vh;
  }

  .bannerPostCard h2 {
    margin-block: 0.7rem;
    font-size: 18px;
    text-transform: capitalize;
  }

  .bannerPostCard {
    font-size: 12px;
  }
`;

export const TrendingWrapper = styled.section`
  .trendIcons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 1rem;
  }

  .trendBoxWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }

  .trendBox {
    width: 100%;
  }

  .trendBox img {
    width: 100%;
    height: 50vh;
  }

  .trendBox h2 {
    font-size: 24px;
    width: 280px;
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bgInfo {
    display: flex;
    justify-content: space-between;
    padding-block: 0.4rem;
  }

  .bgInfo span:first-child {
    font-size: 12px;
    opacity: 0.4;
  }

  .bgInfo span:last-child {
    text-transform: uppercase;
    font-size: 12px;
    opacity: 0.6;
  }
`;

export const ArticlesWrapper = styled.section`
  padding-block: 4rem;

  .topArticles {
    border-block: 2px solid #e2e2e2;
    padding-block: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
  }

  .topArticles h3 {
    text-transform: uppercase;
    font-size: 22px;
  }

  .topArticles a {
    color: #000;
    opacity: 0.6;
    font-size: 18px;
  }

  .artWrapper {
    display: grid;
    gap: 2rem;
    padding-block: 4rem;
  }

  .artBox {
    display: flex;
    gap: 3rem;
  }

  .artBox img {
    width: 300px;
    height: 40vh;
  }

  .artInfo span {
    text-transform: uppercase;
    font-size: 12px;
    opacity: 0.6;
    font-weight: 550;
  }

  .artInfo span:last-child {
    text-transform: unset;
    font-weight: 400;
    font-size: 11px;
  }

  .artInfo h3 {
    font-size: 30px;
    width: 770px;
    font-weight: 200;
    margin-top: 1rem;
  }

  .artInfo p {
    font-size: 18px;
    margin-top: 0.6rem;
    width: 750px;
    opacity: 0.7;
    padding-bottom: 1.5rem;
  }
`;

export const BlogWrapper = styled.section`
  padding-block: 4rem;

  .blogT {
    border-block: 2px solid #e2e2e2;
    padding-block: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }

  .blogT a {
    font-size: 19px;
    text-decoration: none;
    color: #000;
    text-transform: capitalize;
  }

  .blogT a:nth-child(1) {
    text-decoration: underline;
  }

  .artWrapper {
    display: grid;
    gap: 2rem;
    padding-block: 4rem;
  }

  .artBox {
    display: flex;
    gap: 3rem;
  }

  .artBox img {
    width: 300px;
    height: 40vh;
  }

  .artInfo span {
    text-transform: uppercase;
    font-size: 12px;
    opacity: 0.6;
    font-weight: 550;
  }

  .artInfo span:last-child {
    text-transform: unset;
    font-weight: 400;
    font-size: 11px;
  }

  .artInfo h3 {
    font-size: 30px;
    width: 770px;
    font-weight: 200;
    margin-top: 1rem;
  }

  .artInfo p {
    font-size: 18px;
    margin-top: 0.6rem;
    width: 750px;
    opacity: 0.7;
    padding-bottom: 1.5rem;
  }
`;

export const BWrapper = styled.section`
  .topArticles {
    border-block: 2px solid #e2e2e2;
    padding-block: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
  }

  .topArticles h3 {
    text-transform: uppercase;
    font-size: 22px;
  }

  .topArticles a {
    color: #000;
    opacity: 0.6;
    font-size: 18px;
  }
`;

// styling for book section
export const BookContainer = styled.div`
  padding-block: 2rem;

  h1 {
    text-transform: capitalize;
    font-size: 50px;
  }

  .booksWrapper{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
  }
`;

export const BookCardWrapper = styled.section`

  img{
    width: 100%;
    height: 40vh;
  }


  h1{
    font-size: 1.7rem;
    font-weight: 500;
  }

  span{
    font-size: 12px;
    opacity: .4;
    text-transform: uppercase;
    margin-block: .5rem;
    display: block;
  }

  button{
    padding: .7rem ;
    width: 100%;

  }
`

export const BookShopCardWrapper = styled.section`

  display:flex;
  gap:30px;
  padding-block:1rem;
 

img{
  height: 270px;
  width: 180px;

}

.wrapperD span{
  text-transform:uppercase;
  font-size:12px;
  opacity:.6;
  display:block;
}

.wrapperD h2{
  font-weight:300;
  padding-block: .5rem;
}

.wrapperD p{
  opacity: .6;
  width:780px;
  padding-block:.5rem
}


.wrapperD button{
  height:58px;
  width:180px;
  margin-top:20px;
  background-color:transparent;
  border:1px solid;
}

.span{
  display:flex;
  gap: 15px;
  align-items:center;
}

.span h3:first-child{
  font-size:33px;
}

.span h3:last-child{
  opacity: .3;
  text-decoration:line-through;
}

`

export const BlogCardWrapper = styled.section`
 
 display:flex;
 margin-top:50px;
 gap:30px;

 img{
  height:190px;
  width:300px;
 }

 .blogCardContent span{
  text-transform:capitalize;
  display:block;
  opacity:.5;
 }

 .blogCardContent span:last-child{
  font-size:10px;
  text-transform:unset;
  padding-block:10px;
 }

 .blogCardContent h3{
  font-size: 27px;
  font-weight:500;
  width:730px;
  padding-block:10px;
 }

 .blogCardContent p{
  font-size: 17px;
  opacity:.8;
  padding-block:10px;
  width:700px;
 }



`

export const PodcastsShopCardWrapper = styled.section`

display:flex;
margin-top:60px;
justify-content:center;
gap:30px;


img{
  height:165px;
  width:250px;
}

.podcastInfo span{
  display:block;
  text-transform:capitalize;
  justify-content:center;
  opacity:.5
}

.podcastInfo h3{
  padding-block:.7rem;
  font-weight:550;
  width:550px;
  font-size:22px;
}

.podcastInfo p{
  width:680px;
  opacity:.7
}

.podcastInfo span:last-child{
  padding-block:1rem;
  opacity:.5
}


`
