import {useState} from 'react'
import ContentWrapper from "../../../component/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../component/switchTabs/SwitchTabs";
import "../style.scss"
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../component/carousel/Carousel';



const Popular = () => {

const [endPoint, setEndPoint] = useState("movie");

const {data, loading} = useFetch(`/${endPoint}/popular`)

  const onTabChange = (tab) =>{
    setEndPoint(tab === "Movies" ? "movie" : "tv")
  }

  return (
    <div className="carousalSection">
      <ContentWrapper>
          <span className="carousalTitle">What's Popular</span>
            <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel 
      data={data?.results} 
      loading={loading} 
      endPoint={endPoint}
      />
    </div>
  )
}

export default Popular
