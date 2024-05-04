import "./Carousel.scss";
import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Wrapper from "../wrapperDiv/Wrapper";
import dayjs from "dayjs";
import Img from "../lazyLoadImg/Img";
import PosterFallBack from "../../assets/no-poster.png";

const Carousel = ({data,loading}) => {
    const {url} = useSelector((state)=>state.allItems);
    const navigate = useNavigate();
    const navigation = (dir)=>{

    }
  return (
    <>
    <div className="carousel">
        <Wrapper>
        <BsFillArrowLeftCircleFill
                    className="carouselLeftNav arrow"
                    onClick={() => navigation("left")}
                />
                <BsFillArrowRightCircleFill
                    className="carouselRighttNav arrow"
                    onClick={() => navigation("right")}
                />
                {!loading ? (
                    <div className="carouselItems">
                        {data?.map((item)=>{
                            const posterUrl =item.poster_path? url.poster+item.poster_path : PosterFallBack;
                            return (
                                <div
                                 key={item.id}
                                 className = "carouselItem">
                                 <div className="posterBlock">
                                    <Img src={posterUrl}/>
                                 </div>
                                 <div className="textBlock">
                                    <span className="title">
                                        {item.title || item.name}
                                    </span>
                                    <span className="date">
                                        {dayjs(item.release_Date).format("MMM D, YYYY")}
                                    </span>
                                 </div>
                                </div>
                            )
                        })}
                    </div>

                ) : (
                    <span>Loading...</span>
                )}
        </Wrapper>
    </div>

    </>
  )
}

export default Carousel