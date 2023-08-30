import React, { useState } from 'react'


const SideBar = ({onData}) => {

    const cityHandler = (city) => {
        onData(city)
    }

    const City = ["London","Tokyo","Miami","Florida","Rome","Jakarta"];
    const [Searchcity,setSearchCity] = useState("karachi")

    const renderCity = City.map((CurEL,ind)=>{
        return (
            <div  key={ind} className='flex gap-5 mt-5 ml-2 hover:pl-5 cursor-pointer transition-all duration-200'>
              <h1><i className="fa-solid fa-city fa-xl"></i></h1>
              <button onClick={(e)=>{
                e.preventDefault();
                cityHandler(CurEL)
              }} >{CurEL}</button>
            </div>
        )
    })

    
    const onchangeHandler = (e) => {
        e.preventDefault();
        setSearchCity(e.target.value);
    }

    const clickHandler = (e) => {
        e.preventDefault();
        cityHandler(Searchcity);
    }

  return (
    <>
        {/* // bigScreens */}
        <div className='h-screen w-3/12 bg-slate-800 fixed right-0 hidden md:flex flex-col'>
        <div className='p-5'>
        <form onSubmit={clickHandler} >
            <input onChange={onchangeHandler} className="shadow appearance-none border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-5" id="username" type="text" placeholder="Search City"/>
            <button type='submit' className='text-white hover:text-sm' ><i className="fa-solid fa-magnifying-glass fa-xl"></i></button>
        </form>
        </div>
        <hr className='mx-5 my-3' />
        <div className='text-white flex flex-col justify-center items-start text-xl p-5'>
                <h1 className='font-bold text-2xl ml-1' >Cities</h1>
                {renderCity}
            </div>
        </div>
        {/* // small screens */}
        <div className='h-16 w-full bg-slate-800 fixed top-0 md:hidden flex justify-center items-center'>
        <div className='flex justify-center items-center'>
        <input onChange={onchangeHandler} className="shadow appearance-none border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-5" id="username" type="text" placeholder="Search City"/>
            <button onClick={clickHandler} className='text-white' ><i className="fa-solid fa-magnifying-glass fa-xl"></i></button>
        </div>
        </div>
    </>)}

export default SideBar;
