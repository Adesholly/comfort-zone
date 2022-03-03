import axios from 'axios'
import React, { useState, useEffect, } from 'react'
import { useParams } from 'react-router'



function Booking({}) {
  
  const {name} = useParams();

  const [room, setRoom] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  

  useEffect( async () => {

    

    try {
      
      setLoading(true);
      const data = (await axios.post('api/rooms/getroombyid', {roomid: name})).data;

      setRoom(data);
      setLoading(false);
      

    } catch (error) {

      setError(true);
      console.log(error);
      setLoading(false);
      
      
    }


  }, [])


  return (
    <div>

      <h1>Booking Screen</h1>
      <h1>Room ID: {name}</h1>  
      <h1>Room Name: {}</h1>

    </div>
  
  )
}

export default Booking

