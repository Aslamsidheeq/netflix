import React,{useState,useEffect} from 'react';
import './RowPost.css';
import axios from '../../Components/axios';
import {imageUrl} from '../constants/constants';
import PopUp from '../popUp/PopUp'

function RowPost(props){

  const [movies,setMovie] = useState([])
  const [isOpen,setIsOpen]= useState(false)
  const [elements, setElements] = useState()

  function showPopUp(current){
    setElements(current)
    // console.log("current",current)
    setIsOpen(true)
  }

  useEffect(() => {
    axios.get(props.url).then(response=>{
      // console.log(response.data.results)
      setMovie(response.data.results)
    })
  },[props.url])
    
    return(
      <>
    <div className='row' style={{ position: 'relative' }}>
        <h2>{props.title}</h2>
        <div className='posters'>
        {movies.map((obj,id)=>
          <div key={id}>
            <img alt="error"
              onClick={()=> {showPopUp(obj)} }
              className={props.isSmall? 'smallPoster':'poster'} 
              src={`${imageUrl+obj.backdrop_path}`}>
            </img>
          </div>
        )}
        </div>
    </div>
    <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
    <PopUp open={isOpen} elements={elements} setIsOpen={setIsOpen} />
    </div>
    </>
)}


export default RowPost;
          