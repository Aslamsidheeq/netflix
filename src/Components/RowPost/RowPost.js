import React,{useState,useEffect} from 'react';
import './RowPost.css';
import axios from '../../Components/axios';
import {API_KEY} from '../constants/constants'
import {imageUrl} from '../constants/constants'

function RowPost() {
  const [movies, setMovie] = useState([])
    useEffect(() => {
      axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then(response=>{
        console.log(response.data.results)
        setMovie(response.data.results)
      })
    }, []);
    

  return (
    <div className='row'>
        <h2>Netflix Originals</h2>
        <div className='posters'>
            {/*{movies.map((obj)=>
            <img className='poster' src='https://images.squarespace-cdn.com/content/v1/59232e19579fb3fa44a693c2/1589212826160-UM9PEPGOS3OJPR0FJ81X/ke17ZwdGBToddI8pDm48kHZUaJeKzodyg_sXWBMxNTdZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxCBUU7B-_SAG1kGvCwYgmUjQXvn8_OJjtz3K1llMQBa1MPsuSXPSY3X-tgg78M7lI/SKOyqL1qFLIhbK6ho2lB-696x975.jpg?format=1500w'></img>)} */}

          {movies.map((obj)=>
          //single elemnt - no need of return statement and curly braces
          <img className='poster' src={`${imageUrl+obj.backdrop_path}`}></img>
)}
        
        

        </div>
    </div>
  )
}

export default RowPost