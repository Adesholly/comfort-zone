import React, { useState } from 'react'
import { Link } from 'react-router-dom'



let count = 0;

function Room({room}) {

  const[showModal, setShowModal] = useState(false);
  const[currentIndex, setCurrentIndex] = useState(0);



  const goToNextClick = () => {
    count = (count + 1) % room.imageURL.length;
    setCurrentIndex(count);
    
  };

  const goToPrevClick = () => {
     const imageLength = room.imageURL.length;
     count = (currentIndex + imageLength - 1) % imageLength;
     setCurrentIndex(count);
  };

  
  return (
    <div className="container max-w-sm w-full lg:max-w-full shadow-lg lg:flex mx-auto">
      <div className="h-18 lg:h-auto lg:w-auto flex-none rounded-t lg:rounded-l text center overflow-hidden">
        <img
          className=""
          src={room.imageURL[1]}
          alt={room.imageURL + "Picture"}
        />
      </div>
      <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl ">{room.name}</div>
          <p className="text-sm text-gray-600 flex items-center">
            {room.facilities}
          </p>

          <div className="flex justify-between">
            <p className="mt-2">Accomodation:</p>
            <span className="text-gray-600 mt-2 ">{room.numberOfPerson}</span>
          </div>

          <div className="flex justify-between">
            <p className="mt-2 text-base ">Phone Number:</p>
            <span className="text-gray-600 mt-2 ">{room.phoneNumber}</span>
          </div>

          <div className="flex justify-between">
            <p className="mt-2 text-base ">Category:</p>
            <span className="text-gray-600 mt-2">{room.catergory}</span>
          </div>

          <div className="hidden lg:block">
            <p className="mt-8 text-base">Description:</p>

            <p className="text-gray-600">{room.description}</p>
          </div>
        </div>

        <div>




          <Link to={`/book/${room.name}`}>
          <button  className="float-right bg-gray-600 text-white active:bg-gray-800 font-bold text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mx-2 mb-1 ease-linear transition-all duration-150">Book</button>
          </Link>

          <>
            <button
              className="float-right bg-gray-600 text-white active:bg-gray-800 font-bold text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Details
            </button>
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-6xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">{room.name}</h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-red opacity-90 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-red-600 opacity-90 h-6 w-6 text-2xl block focus:outline-none">
                            X
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <div className="lg:flex select-none relative">
 
                    
                          <img className="mx-auto h-64 w-5/6 lg:h-96 lg:w-4/6 lg:-mx-0 md:h-80 " src={room.imageURL[currentIndex]} alt={room.name + 'Image'}/>
                            <div className="absolute w-full lg:w-6/12 top-1/2 transform -translate-y-1/2 py-2 flex justify-between  ">
                              <button className="lg:ml-6" onClick={goToPrevClick}>Prev</button>
                              <button onClick={goToNextClick}>Next</button>
                            </div>

                      
                          <div className="hidden lg:block lg:w-full lg:px-12">

                            <div className="flex justify-between pb-5">
                              <p className="mt-2">Facilities:</p>
                              <span className="text-gray-600 mt-2 ">{room.facilities}</span>
                            </div>

                            <div className="flex justify-between pb-5">
                              <p className="mt-2">Accomodation:</p>
                              <span className="text-gray-600 mt-2 ">{room.numberOfPerson}</span>
                            </div>

                            <div className="flex justify-between pb-5">
                              <p className="mt-2 text-base ">Phone Number:</p>
                              <span className="text-gray-600 mt-2 ">{room.phoneNumber}</span>
                            </div>

                            <div className="flex justify-between pb-5">
                              <p className="mt-2 text-base ">Category:</p>
                              <span className="text-gray-600 mt-2">{room.catergory}</span>
                            </div>

                          </div>
                            


                        </div>
                        

                        
                        <p className="my-4 text-blueGray-500 text-lg leading-relaxed text-center lg:text-left">
                         {room.description}
                        </p>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                     
                        <button
                          className="bg-gray-600 text-white active:bg-gray-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                           S
                        >
                          Book
                        </button>
                      
                    
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </>
        </div>
      </div>
    </div>
  );
}

export default Room