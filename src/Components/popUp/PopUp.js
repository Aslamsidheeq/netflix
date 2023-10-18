import React from 'react'
import {imageUrl} from '../constants/constants';
import './popup.css';
import PopUpContext from '../context'
import { useContext } from 'react';

function PopUp({elements}) {
  const {isOpen,setIsOpen}=useContext(PopUpContext)

  if(!isOpen) return null
  // console.log("elem at Pop",elements)
  return (
    <div className='popup-container' onClick={()=>setIsOpen(false)}> 
      <img className='smallPoster' src={`${imageUrl+elements.backdrop_path}`} alt='error'/>
      <br/>
      <h3>{elements.title}</h3>
      <h3>{elements.name}</h3>
      <div className='text-container'>
      <p className='text'>{elements.overview}</p>
      </div>
    </div>
  )
}

export default PopUp