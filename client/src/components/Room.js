import React, { useState } from 'react'

function Room({room}) {

  const[showModal, setShowModal] = useState(false);
  return (
    <div className="container max-w-sm w-full lg:max-w-full shadow-lg lg:flex mx-auto"  >

      <div className="h-18 lg:h-auto lg:w-auto flex-none rounded-t lg:rounded-l text center overflow-hidden" >
        <img className="" src={room.imageURL[1]} alt={room.imageURL + 'Picture'}/>
    
      </div>
      <div className= "bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl ">{room.name}</div>
          <p class="text-sm text-gray-600 flex items-center">{room.facilities}</p>

          <div className="flex justify-between">
            <p class="mt-2">
              Accomodation: 
            </p>
            <span className="text-gray-600 mt-2 ">{room.numberOfPerson}</span>
          </div>

          <div className="flex justify-between">
            <p class="mt-2 text-base ">
             Phone Number:
            </p>
            <span className="text-gray-600 mt-2 ">{room.phoneNumber}</span>
          </div>

          <div className="flex justify-between">
            <p class="mt-2 text-base ">
            Category:
            </p>
            <span className="text-gray-600 mt-2">{room.catergory}</span>
          </div>

          <div className="hidden lg:block" >
          
          <p className="mt-8 text-base">Description:</p>
          
            <p className="text-gray-600">{room.description}</p>
            
          </div>
   
        </div>  
        <div>
          
          <button className="btn bg-pink-500 text -white active:bg-pink-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " type="button" onClick={() => {setShowModal(true)}}>Details</button>

          {showModal ? (
            <div>
              <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    {room.description}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                 
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>

          ) : null}



          <button className="btn1">Book</button>
        </div>
      </div>

      
    </div>
  );
}

export default Room