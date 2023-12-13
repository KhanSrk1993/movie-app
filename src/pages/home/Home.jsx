import "./Home.scss"
import HeroBanner from './heroBanner/HeroBanner';
import Popular from "./popular/Popular";
import TopRated from "./toprated/TopRated";
import Trending from "./trending/Trending";



const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
      {/* <div style={{height: 1000}} ></div> */}

    </div>
  )
}

export default Home
