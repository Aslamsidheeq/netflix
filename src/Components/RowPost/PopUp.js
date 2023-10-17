import React from 'react'
import {imageUrl} from '../constants/constants';
import './RowPost.css';

function PopUp({open,elements}) {
  if(!open) return null
  console.log("elem at Pop",elements)
  return (
    <div>
      <img className='smallPoster' src={`${imageUrl+elements.backdrop_path}`} alt='error'/>
      <h3>{elements.name}</h3>
      <p>{elements.overview}</p>
    </div>
  )
}

export default PopUp