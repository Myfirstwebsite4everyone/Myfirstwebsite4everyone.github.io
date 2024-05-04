import React, { useState } from 'react'
import "./Header.scss";
import Wrapper from '../wrapperDiv/Wrapper';
import logo from "../../assets/movix-logo.png";
import { useNavigate } from 'react-router-dom';
import { HiOutlineSearch } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
const Header = () => {
  const [mobileMenu,setMobileMenu] = useState(false);
  const [query,setQuery] = useState();
  const [showSearch,setShowSearch] = useState();
  const navigate = useNavigate();

  const openSearch = ()=>{
    setMobileMenu(false);
    setShowSearch(true);

  }
  const openMobileMenu = ()=>{
    setMobileMenu(true);
    setShowSearch(false);
  }

  const searchQueryHandler = (e) => {
    if (e.key === 'Enter' && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(()=>{
        setShowSearch(false);
      },1000)
    }
  };

  const navigationHandler = (type)=>{
    if(type === "movie"){
      navigate("/explore/movie")
    }else{
      navigate("/explore/tv")
    }
    setMobileMenu(false);
  };

  
  return (
    <>
    <header className={`header ${mobileMenu ? "mobileView" : ""}`}>
    <Wrapper>
      <div className='logo'>
        <img src={logo} className='movixlogo' alt=''/>
      </div>
      <ul className='menuItems'>
        <li className='menuItem' onClick={()=>navigationHandler("movie")}>Movies</li>
        <li className='menuItem' onClick={()=>navigationHandler("tv")}>Tv Shows</li>
        <li className='menuItem' onClick={openSearch}><HiOutlineSearch/></li>
      </ul>
      <div className='mobileMenuItems'>
      <HiOutlineSearch onClick={openSearch}/>
      {mobileMenu ? 
        <IoClose onClick={()=> setMobileMenu(false)}/>:<FiMenu onClick={openMobileMenu}/>
      }
      </div>
      </Wrapper>
      { showSearch && <div className='searchBar'>
        <Wrapper>
           <div className='searchInput'>
          <input
              type='text'
              placeholder='Search for a movie or TV show...'
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
            <IoClose onClick={()=>setShowSearch(false)}/>
          </div>
        </Wrapper>
      </div>}
      </header>
    </>
  )
}

export default Header