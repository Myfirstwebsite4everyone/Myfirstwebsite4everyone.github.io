import React, { useEffect } from 'react';
import { fethDataFromApi } from './utils/api';
import { getApiConfiguration } from './store/movixSlice';
import { useDispatch } from 'react-redux';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import NotFound from './pages/404/NotFound';
import Explore from './pages/explore/Explore';
import Search from './pages/searchResult/Search';
import Details from './pages/details/Details';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getGenres } from './store/movixSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    apiConfig();
    getGenres();
  }, []);

  const apiConfig = () => {
    fethDataFromApi('/configuration')
      .then((res) => {
        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original" 
        }
        dispatch(getApiConfiguration(url));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getGenres = async()=>{
    const promises = [];
    const endPoints = ["movie","tv"];
    const allGenres = {};
    endPoints.map((url)=>{
      promises.push(fethDataFromApi(`/genre/${url}/list`));
    });

  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
