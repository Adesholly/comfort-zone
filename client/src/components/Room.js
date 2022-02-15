import React from 'react'

function Room({room}) {
  return (
    <div className="md:flex bg-slate-200 p-10"  >

      <div className="w-2/5">
        <img className="rounded  " src={room.imageURL[0]} alt={room.name + 'Image'}  />
      </div>
      <div className="3/5 mx-10 ">
        <h1 className="text-2xl ">{room.name}</h1>

        <ul/>
         
        <p className="">{room.facilities}</p>
        <p>Accomodation: {room.numberOfPerson}</p>
        <p>Phone Number: {room.phoneNumber}</p>
        <p>Type: {room.catergory}</p>
        <div>
          <button className="btn">Details</button>
          <button className="btn1">Book</button>
        </div>
      </div>

      
    </div>
  )
}

export default Room