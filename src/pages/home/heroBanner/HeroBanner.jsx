import React, { useEffect, useState } from 'react';
import './HeroBanner.scss'; // Import SCSS file
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImg/Img';
import Wrapper from '../../../components/wrapperDiv/Wrapper';

const HeroBanner = () => {
  const { backdrop } = useSelector((state) => state.allItems.url);
  const { data, loading } = useFetch('/movie/popular');
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [backgroundImg, setBackgroundImg] = useState('');

  useEffect(() => {
    if (!loading && data?.results?.length) {
      const randomBackdropPath =
        data.results[Math.floor(Math.random() * data.results.length)].backdrop_path;
      const bg = randomBackdropPath ? backdrop + randomBackdropPath : '';
      setBackgroundImg(bg);
    }
  }, [data, loading, backdrop]);

  const searchQueryHandler = (e) => {
    if (e.key === 'Enter' && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className='heroBanner'>
      {!loading && (
        <div className="backdrop-img">
          <Img src={backgroundImg} />
        </div>
      )}
      <div className='opacity-layer'></div>
      <Wrapper>
        <div className='heroBannerContent'>
          <span className='title'>Welcome.</span>
          <span className='subtitle'>
            Millions of movies, TV shows,<br/> and people
            to discover.
            Explore now.
          </span>
          <div className='searchInput'>
            <input
              type='text'
              placeholder='Search for a movie or TV show...'
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button>Search</button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HeroBanner;
