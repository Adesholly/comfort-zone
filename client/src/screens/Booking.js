import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router'



function Booking() {
  
  const {roomid} = useParams();


  return (
    <div>
      <h1>Booking Screen</h1>
      <h1>Room ID: {roomid}</h1>
      
    
    </div>
  
  )
}

export default Booking

