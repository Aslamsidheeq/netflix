import '../Components/banner.css'
import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from '../../src/Components/axios'
import { API_KEY,imageUrl } from './constants/constants';


function Banner() {


  const [movie, setMovie] = useState([])
    useEffect(() => {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        // console.log(response.data.results)
        setMovie(response.data.results[0])
        
      })
    }, []);

  return (
    <div className="banner_div">
        <h2>Trending: {movie.title }</h2>
        <p>{movie.overview}</p>
        <img id="pic" src={imageUrl+movie.backdrop_path} alt=""></img>
        {/* <img id="pic" src={imageUrl+movie.poster_path} alt=""></img> */}
        </div>
  )
}

export default Banner