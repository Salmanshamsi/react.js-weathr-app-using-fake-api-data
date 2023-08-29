import React, { useState } from 'react'
import SideBar from '../components/SideBar';
import CityCard from '../components/CurrentCityCard';

const MainScreen = () => {

  const [city, setCity] = useState("karachi");
  const [DefaultcityList, setDefaultcityList] = useState();

  const DataHandler = data => setCity(data);
  const Data2Handler = data => setDefaultcityList(data);
  
  
  console.log(DefaultcityList)

  return (
    <>
      <SideBar onData={DataHandler} onData2={Data2Handler} />
      <CityCard city={city} navCityList={DefaultcityList} />
    </>
  )
}
export default MainScreen;
