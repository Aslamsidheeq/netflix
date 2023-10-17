import React from 'react'
import {imageUrl} from '../constants/constants';
import './popup.css';
function PopUp({open,elements,setIsOpen}) {
  if(!open) return null
  // console.log("elem at Pop",elements)
  return (
    <div className='popup-container' onClick={()=>setIsOpen(false)}> 
      <img className='smallPoster' src={`${imageUrl+elements.backdrop_path}`} alt='error'/>
      <br/>
      <h3>{elements.title}</h3>
      <h3>{elements.name}</h3>
      <p className='text'>{elements.overview}</p>
      <br/>
      <p className='text'style={{color:"blue"}}>Close by clicking anywhere</p>
    </div>
  )
}

export default PopUp