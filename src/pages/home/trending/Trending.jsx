import React, { useState } from 'react'
import Wrapper from '../../../components/wrapperDiv/Wrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'

const Trending = () => {
    const [endPoint,setEndpoint] = useState("day");
    const {loading,data} = useFetch(`/trending/all/${endPoint}`);
    const onTabChange = (Tab,index)=>{
        setEndpoint(Tab === "Day" ? "day" : "week");
    }
  return (
    <>
        <div className='carouselSection'>
            <Wrapper>
            <span className='carouselTitle'>Trending</span>
            <SwitchTabs data = {["Day","Week"]} onTabChange = {onTabChange}/>
            </Wrapper>
            <Carousel data = {data?.results} loading = {loading}/>
        </div>
    </>
  )
}

export default Trending