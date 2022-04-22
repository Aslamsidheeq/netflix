import React, { useState } from 'react'
import { useEffect } from 'react';
function Api() {

    const [elements,SetElements]=useState([])
    useEffect(() => {
      getElements();
    }, []);
    
    // OLD METHOD - FETCH
    // const getElements= async()=>{
    //     const api=await fetch('https://api.themoviedb.org/3/movie/550?api_key=e9044c90b52c25e2358eeddd4b087e60')
    //     const data= await api.json();
    //     SetElements(data)
    //     console.log("el",elements);
    //   }

  return (
    <div>
        
        {/* FETCH METHOD RESULT 
        <h1>{elements.original_title}</h1>
        <img src="https://image.tmdb.org/t/p/w500/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg" alt="nil" /> */}
        </div>
  )
}

export default Api