import React, { useState, useEffect } from "react";
import axios from "axios";

function Homescreen (){

    // const [rooms, setRooms] = useState(0);
    
    useEffect( async () => {

        try {
            
            const data = (await axios.get('/api/rooms/getallrooms')).data;
            console.log(data)

        } catch (error) {
            console.log(error)
        }
        
    })

    return (
        <div>
            <h1 className="h-1">Home Screen Here</h1>
        </div>
    )
}

export default Homescreen;