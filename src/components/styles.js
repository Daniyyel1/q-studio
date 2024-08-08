import styled from "styled-components";


export const NavWrapper = styled.nav`

   display:flex;
   justify-content:space-between;
   align-items:center;
   padding-block:1rem;


.navRight{
  width:600px;
  display:flex;
  justify-content:space-between;
  align-items:center;
}

.navItems{
  display:flex;
  align-Items:center;
  gap:2rem;
}

.navItems a{
    text-transform:capitalize;
    text-decoration:none;
    color:#000;
}

.navIcons{
    color: #000;
}

`

export const BannerWrapper = styled.div`
   display:grid;
   grid-template-columns:2fr 1fr;
   gap:2rem;

   .bigBanner img{
    width:100%;
    height:75vh;
}

.bgInfo, .postCardInfo{
    display:flex;
    justify-content:space-between;
}

.bgInfo span, .postCardInfo span{
    opacity: 0.5;
    font-size:10px;
}

.bgInfo span:last-child, .postCardInfo span:last-child{
    font-weight:700;
    text-transform:uppercase;
}

.bigBanner h1{
    margin-block:1rem;
    text-transform:capitalize;
}

.bgBannerPosts{
    border:2px solid grey;
    padding-inline:1rem;
    border-bottom:none;
    border-right:none;
    border-top:none;
}

.bannerPostCard{
    margin-bottom:0.8rem;
}

.bannerPostCard img{
    width:100%;
    height:30vh;
}

.bannerPostCard h2{
    margin-block:0.7rem;
    font-size:18px;
    text-transform:capitalize;
}

.bannerPostCard{
    font-size:12px;
}

`

export const TrendingWrapper = styled.section`
 .trendIcons{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-block:1rem;
 }

 .trendBoxWrapper{
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    gap: 2rem
 }

.trendBox{
    width:100%;
}

 .trendBox img{
    width:100%;
    height:50vh;
 }

 .trendBox h2{
    font-size:24px;
    width:280px;
    font-weight:300;
    display:flex;
    justify-content:center;
    align-items:center;
 }


.bgInfo{
    display:flex;
    justify-content:space-between;
    padding-block:.4rem;
}

.bgInfo span:first-child{
    font-size:12px;
    opacity:.4;
}

.bgInfo span:last-child{
    text-transform:uppercase;
    font-size:12px;
    opacity:.6;
}

`

export const ArticlesWrapper = styled.section`

padding-block:4rem;


.topArticles{
  border-block: 2px solid #e2e2e2;
  padding-block: .7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  

}

.topArticles h3{
  text-transform: uppercase;
  font-size: 22px;

}

.topArticles a{
  color:#000;
  opacity: .6;
  font-size: 18px;
}

.artWrapper{
    display:grid;
    gap:2rem;
    padding-block:4rem;
}

.artBox{
    display:flex;
    gap:3rem;
}

.artBox img{
    width:300px;
    height:40vh;
}

.artInfo span{
    text-transform:uppercase;
    font-size:12px;
    opacity:.6;
    font-weight:550
}

.artInfo span:last-child{
    text-transform:unset;
    font-weight:400;
    font-size:11px;
}

.artInfo h3{
    font-size:30px;
    width:770px;
    font-weight:200;
    margin-top:1rem;
}


.artInfo p{
    font-size:18px;
    margin-top:.6rem;
    width:750px;
    opacity:.7;
    padding-bottom:1.5rem;
}

`

export const BlogWrapper = styled.section`

padding-block:4rem;


.blogT{
    border-block:2px solid #e2e2e2;
    padding-block:.7rem;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:3rem;
}

.blogT a{
    font-size:19px;
    text-decoration:none;
    color:#000;
    text-transform:capitalize;
    
}

.blogT a:nth-child(1){
    text-decoration:underline;
    
}


.artWrapper{
    display:grid;
    gap:2rem;
    padding-block:4rem;
}

.artBox{
    display:flex;
    gap:3rem;
}

.artBox img{
    width:300px;
    height:40vh;
}

.artInfo span{
    text-transform:uppercase;
    font-size:12px;
    opacity:.6;
    font-weight:550
}

.artInfo span:last-child{
    text-transform:unset;
    font-weight:400;
    font-size:11px;
}

.artInfo h3{
    font-size:30px;
    width:770px;
    font-weight:200;
    margin-top:1rem;
}


.artInfo p{
    font-size:18px;
    margin-top:.6rem;
    width:750px;
    opacity:.7;
    padding-bottom:1.5rem;
}


`

export const BWrapper = styled.section`


.topArticles{
  border-block: 2px solid #e2e2e2;
  padding-block: .7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  

}

.topArticles h3{
  text-transform: uppercase;
  font-size: 22px;

}

.topArticles a{
  color:#000;
  opacity: .6;
  font-size: 18px;
}

`