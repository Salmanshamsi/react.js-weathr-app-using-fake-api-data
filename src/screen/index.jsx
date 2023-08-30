import React, { useState } from 'react'
import SideBar from '../components/sideBar';
import CityCard from '../components/CurrentCityCard';

const MainScreen = () => {

  const [city, setCity] = useState("karachi");

  const DataHandler = data => setCity(data);  

  return (
    <>
      <SideBar onData={DataHandler} />
      <CityCard city={city} />
    </>
  )
}
export default MainScreen;
