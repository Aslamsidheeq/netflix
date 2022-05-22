import React,{useState,useEffect} from 'react';
import './RowPost.css';
import axios from '../../Components/axios';
import {imageUrl} from '../constants/constants'

function RowPost(props){

  const [movies,setMovie] = useState([])

    useEffect(() => {
      axios.get(props.url).then(response=>{
        console.log(response.data.results)
        setMovie(response.data.results)
      })
    },)

    return(
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>

          {movies.map((obj)=>
          //single elemnt - no need of return statement and curly braces
          <img  className={props.isSmall? 'smallPoster':'poster'} alt="error" src={`${imageUrl+obj.backdrop_path}`}></img>
  )}
         
        </div>
    </div>
)}


export default RowPost;
          