import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1rem;
  /* border: 2px solid red; */

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

  /* .navIcons {
    border:2px solid;
  } */

  .navIcons > a {
    font-size: 18px;
    text-decoration: none;
    color: #000;
    position: relative;
  }

  .navIcons > a > span {
    position: absolute;
    padding: 0.6rem;
    top: -12px;
    right: -0.7rem;
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 15px;
    font-size: 15px;
    border-radius: 100%;
  }
`;

export const BannerWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  .bigBanner > img {
    width: 100%;
    /* height: 55vh; */
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
    /* height: 25vh; */
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
    /* height: 30vh; */
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

// styling for Article
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
    /* height: 30vh; */
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

export const CategoryWrapper = styled.div`
    margin-block: 3rem;
    border-block: 2px solid #e2e2e2;
    padding-block: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    a {
    font-size: 19px;
    text-decoration: none;
    color: #000;
    text-transform: capitalize;
  }

  a:nth-child(1) {
    text-decoration: underline;
  }
`

export const BlogWrapper = styled.section`
  /* padding-block: 4rem; */

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
    margin-block: 2rem;

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

  .booksWrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
  }
`;

export const BookCardWrapper = styled.section`
  img {
    width: 100%;
    /* height: 30vh; */
  }

  h1 {
    font-size: 1.2rem;
    font-weight: 500;
  }

  span {
    font-size: 12px;
    opacity: 0.4;
    text-transform: uppercase;
    margin-block: 0.5rem;
    display: block;
  }

  button {
    padding: 0.7rem;
    width: 100%;
  }
`;

export const BookShopCardWrapper = styled.section`
  display: flex;
  gap: 30px;
  height: 40vh;
  margin-bottom: 2rem;

  .imgCont {
    width: 27%;
  }

  .imgCont > img {
    height: 100%;
    width: 100%;
  }
  .wrapperD {
    width: 70%;
  }

  .wrapperD span {
    text-transform: uppercase;
    font-size: 12px;
    opacity: 0.6;
  }

  .wrapperD h2 {
    font-weight: 300;
    padding-block: 0.5rem;
  }

  .wrapperD p {
    opacity: 0.6;
    padding-block: 0.5rem;
  }

  .wrapperD button {
    height: 58px;
    width: 180px;
    margin-top: 20px;
    background-color: transparent;
    border: 1px solid;
  }

  .span {
    display: flex;
    gap: 15px;
    align-items: center;
  }

  .span h3:first-child {
    font-size: 33px;
  }

  .span h3:last-child {
    opacity: 0.3;
    text-decoration: line-through;
  }
`;

export const BlogCardWrapper = styled.section`
  display: flex;
  margin-top: 50px;
  gap: 30px;

  img {
    height: 190px;
    width: 300px;
  }
  .infoTag {
    display: flex;
    opacity: 0.5;
    justify-content: space-between;
  }

  .infoTag > span {
    text-transform: capitalize;
    display: block;
    opacity: 0.5;
  }

  .blogCardContent span:last-child {
    font-size: 10px;
    text-transform: unset;
    padding-block: 10px;
  }

  .blogCardContent h3 {
    font-size: 27px;
    font-weight: 500;
    width: 730px;
    padding-block: 10px;
  }

  .blogCardContent p {
    font-size: 17px;
    opacity: 0.8;
    padding-block: 10px;
    width: 700px;
  }
`;

export const PodcastsShopCardWrapper = styled.section`
  display: flex;
  margin-top: 60px;
  justify-content: center;
  gap: 30px;

  img {
    height: 165px;
    width: 250px;
  }

  .podcastInfo span {
    display: block;
    text-transform: capitalize;
    justify-content: center;
    opacity: 0.5;
  }

  .podcastInfo h3 {
    padding-block: 0.7rem;
    font-weight: 550;
    width: 550px;
    font-size: 22px;
  }

  .podcastInfo p {
    width: 680px;
    opacity: 0.7;
  }

  .podcastInfo span:last-child {
    padding-block: 1rem;
    opacity: 0.5;
  }
`;

// styling for shop page
export const ShopWrapper = styled.div`
  /* border: 2px solid red; */

  .searchInput {
    border-bottom: 2px solid black;
    max-width: 400px;
    margin: 2rem auto;
  }

  .searchInput > input {
    width: 100%;
    border: none;
    outline: none;
    padding: 0.3rem 1rem;
  }

  .book_product_container {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }
`;

// styling for book product wrapper
export const BookProductWrapper = styled.div`
  .bookImg {
    /* border: 2px solid red; */
    width: 100%;
  }
`;

// styling for cartpage
export const CartPageWrapper = styled.div`
  .cartBody {
    padding-block: 5rem;
    /* border: 2px solid red; */
    width: 80%;
  }
  .empty-cart {
    text-align: center;
    padding-block: 5rem;
  }

  .img-fluid {
    width: 30%;
  }

  .empty-cart p {
    margin-bottom: 30px;
  }
  .empty-cart a {
    text-decoration: none;
    background: #794e21;
    padding: 10px;
    color: #fff;
    font-weight: 500;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
  }
  .empty-cart a:hover {
    background-color: black;
    color: #fff;
  }
  .total {
    width: 30%;
    /* flex: 1; */
    padding-inline: 2rem;
    border: 2px solid #794e21;

    h1 {
      text-align: center;
      font-size: 1.3rem;
      margin-bottom: 7px;
      text-transform: capitalize;
    }

    p {
      text-align: center;
      font-size: 14px;
      text-transform: capitalize;
      letter-spacing: 3px;
    }
  }
  .ending {
    display: flex;
    justify-content: space-between;
    /* background: #e4cfc4; */
    background: #000;
    color: #fff;
    padding: 0.8rem 1rem;
    margin-block: 1rem;
  }
  .ending p,
  h3 {
    font-size: 16px;
    font-weight: 500;
  }
  .btn__btn {
    margin-block: 2rem;
    border-radius: 7px;

    .formInput {
      border-bottom: 2px solid #794e21;
      margin-bottom: 0.7rem;

      label {
        text-transform: capitalize;
        font-weight: 500;
      }

      input {
        width: 100%;
        padding: 0.3rem;
        border: none;
        outline: none;
        font-size: 17px;
      }
    }

    button {
      color: white;
      background: #000;
      /* background: #794e21; */
      padding: .6rem 1.2rem;
      cursor: pointer;
      border: none;
      font-weight: 500;
      letter-spacing: 2px;
      font-size: 12px;
      text-transform: uppercase;

      &:hover {
        background-color: blue;
        color: white;
        border-radius: 7px;
      }
      &:disabled {
        background-color: gray;
      }
    }
  }

  @media (max-width: 950px) {
    overflow: hidden;

    .total {
      max-width: 350px;
    }

    .scroll__bar {
      width: 380px;
      overflow: auto;
    }

    .img-fluid {
      width: 50%;
    }

    .btn__btn {
      flex-direction: column;
      gap: 20px;
    }
  }
`;

export const CartBody = styled.table`
  width: 100%;
  margin-top: 1.5rem;
  border-collapse: collapse;
  border: 1px solid #ddd;
  text-align: left;
  display: flex;
  align-items: center;
  /* gap: 3rem; */
  justify-content: space-between;

  th {
    padding-block: 15px;
    border-bottom: 2px solid #794e21;
  }
  td {
    padding-inline: 15px;
    border-bottom: 2px solid #794e21;
  }
  .del {
    color: red;
    font-size: 30px;
    margin-right: 2.7rem;
    cursor: pointer;
  }

  .left {
    background: red;
    padding: 7px 20px;
    border-radius: 5px;
    color: white;
    margin-right: 1rem;
  }
  .right {
    background: green;
    padding: 7px 20px;
    border-radius: 5px;
    color: white;
    margin-left: 1rem;
  }

  @media (max-width: 950px) {
    .left {
      padding: 4px 16px;
      margin-bottom: 10rem;
    }
    .right {
      padding: 4px 16px;
      margin-top: 10rem;
    }
  }
`;

export const CartImgCont = styled.div`
  // border: 2px solid black;
  width: 80px;
  height: 80px;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  @media (max-width: 950px) {
    width: 80px;
    height: 80px;
  }
`;

// styling for subscribe component
export const SubscribeWrapper = styled.div`
  border-block: 2px solid gray;
  padding-block: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .subscribe__content{
    max-width: 670px;
    margin: auto;
  }

  .subscribe__content > h1{
    text-transform: uppercase;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 500;
  }

  .subscribe__content  > p{
    text-align: center;
    margin-block: 2rem;
    opacity: .7;
  }

  .subscribe__btns{
    display: flex;
    gap: 4rem;
  }

  .subscribe__btns > button{
    /* flex: 1; */
    width: 70%;
    background-color: #000;
    color: #fff;
    padding: 1rem 0;
  }

  .subscribe__btns > button:first-child{
    width: 30%;
  }
`