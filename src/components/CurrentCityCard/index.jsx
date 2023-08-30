import React, { useEffect, useState } from 'react'
import axios from 'axios'
import rain from "../../assets/imges/rain.gif";
import cloud from "../../assets/imges/cloudy.gif";
import smoke from "../../assets/imges/smoke.gif";
import clear from "../../assets/imges/clear.gif";



const CityCard = ({city}) => {

  const [cityData, setCityData] = useState();
  const [loading, setloading] = useState("hidden");


const getInpCity = async (inpCity)=>{

    try{

        setloading("visible");

        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inpCity}&appid=1a4bb6d2337db0f0a4b8bd76f05a61fa&units=metric`).then((resp)=>{
          setCityData(resp.data)
        }).catch((err)=>{
          console.log("resp Error : " , err)
        })

        setloading("hidden");

    }catch(err){
        throw new Error(err);
    }
} 

  useEffect(() => {getInpCity(city)} , [city]);

  return (
    
    <>
    
    <div className='h-screen md:w-9/12 w-full flex lg:justify-start lg:items-start justify-center items-center flex-col-reverse gap-3 z-40'
    style={{
        height: '100vh',
        backgroundImage: `url(${(()=>{

            try{
                
                if (cityData && cityData && cityData.weather && cityData.weather[0] && cityData.weather[0].main === "Rain") {
                    return rain;
                  } else if (cityData && cityData.weather && cityData.weather[0] && cityData.weather[0].main === "Clouds") {
                    return cloud ;
                  } else if (cityData && cityData.weather && cityData.weather[0] && (cityData.weather[0].main === "Clear" || cityData.weather[0].main === "sunny")) {
                    return clear;
                  } else if (cityData && cityData.weather && cityData.weather[0] && (cityData.weather[0].main === "Smoke" || cityData.weather[0].main === "Haze")) {
                    return smoke;
                  }
            }catch(err){
                throw new Error(err);
            }

        })()})`,
        backgroundSize: 'cover',
        backgroundColor:'skyblue',
        backgroundPosition: 'center',
      }}
    >
        <div className='lg:h-2/6 lg:w-6/12 ml-5 mb-5 border flex justify-between items-center shadow-lg bg-slate-700 text-white rounded-lg lg:p-0 p-5'>
            <div className='flex flex-col gap-5 ml-5'>
                <div className='text-2xl md:text-2xl'>{cityData?.name}</div>
                <div className='text-4xl md:text-7xl'>{cityData?.main.temp+"\u00B0"}</div>
                <div className='text-2xl md:text-2xl'>{new Date(cityData?.dt * 1000).toLocaleDateString()}</div>
            </div>
            <div className='flex flex-col gap-3 justify-center items-center lg:ml-0 ml-14 text-6xl lg:p-10 mr-5'>
                {(()=>{

                    try{
                        if (cityData && cityData.weather && cityData.weather[0] && cityData.weather[0].main === "Rain") {
                            return <i className="fa-solid fa-cloud-rain"></i>;
                          } else if (cityData && cityData.weather && cityData.weather[0] && cityData.weather[0].main === "Clouds") {
                            return <i className="fa-solid fa-cloud"></i>;
                          } else if (cityData && cityData.weather && cityData.weather[0] && (cityData.weather[0].main === "Clear" || cityData.weather[0].main === "sunny")) {
                            return <i className="fa-solid fa-sun"></i>;
                          } else if (cityData && cityData.weather && cityData.weather[0] && (cityData.weather[0].main === "Smoke" || cityData.weather[0].main === "Haze")) {
                            return <i className="fa-solid fa-smog"></i>;
                          }
                    }catch(e){throw new Error(e)}
                  
                })()}
                <span className='text-xl' >{cityData?.weather[0].main}</span>
            </div>
        </div>

        <div  className='p-5 w-full  lg:w-6/12 flex justify-center items-center flex-wrap gap-4  '>
                    <div className='border lg:h-46 lg:w-40 h-24 w-24 shadow-lg rounded-md flex flex-col items-center justify-center gap-2 bg-slate-700 text-white'>
                        <h1><i className="fa-solid fa-eye fa-2xl"></i></h1>
                        <h2 className='lg:text-2xl text-xl'><span className='mr-3'>Km</span>{cityData?.visibility}</h2>
                    </div>
                    <div className='border lg:h-46 lg:w-40 h-24 w-24 shadow-lg rounded-md flex flex-col items-center justify-center gap-2 bg-slate-700 text-white'>
                        <h1><i className="fa-solid fa-wind fa-2xl"></i></h1>
                        <h2 className='lg:text-2xl text-xl'><span className='mr-3'>deg</span>{cityData?.wind.deg}</h2>
                    </div>
                    <div className='border lg:h-46 lg:w-40 h-24 w-24 shadow-lg rounded-md flex flex-col items-center justify-center gap-2 bg-slate-700 text-white'>
                        <h1><i className="fa-solid fa-droplet fa-2xl"></i></h1>
                        <h2 className='lg:text-2xl text-xl'>{cityData?.main.humidity}<span className='ml-3'>%</span></h2>
                    </div>
                    <div className='border lg:h-46 lg:w-40 h-24 w-24 shadow-lg rounded-md flex flex-col items-center justify-center gap-2 bg-slate-700 text-white'>
                        <h1><i className="fa-solid fa-water fa-2xl"></i></h1>
                        <h2 className='lg:text-2xl text-xl'><span className='mr-3'>Hpa</span>{cityData?.main.pressure}</h2>
                    </div>
            </div>

    </div>

                
            {/* loading */}


        <div className={`${loading} border h-screen w-screen z-50 absolute top-0 bg-black bg-opacity-50 flex justify-center items-center`}>
            <h1 className='text-white' ><i className="fa-solid fa-spinner fa-spin fa-2xl"></i></h1>
        </div>
    
    </>

  )
}
export default CityCard;