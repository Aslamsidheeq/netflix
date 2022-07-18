import React from 'react'
import {imageUrl} from '../constants/constants';
import './RowPost.css';

function PopUp({open,pic}) {
  if(!open) return null
  {console.log(pic)}
  return (
    
    <div>
      <div><img className='poster' alt="error" src={`${imageUrl+pic}`}></img>
      <h3>{pic.name}</h3></div>
      
    </div>
  )
}

export default PopUp