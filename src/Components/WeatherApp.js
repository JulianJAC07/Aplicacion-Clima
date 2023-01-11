import React,{useEffect, useState} from 'react';
import WestherForm from './WestherForm';
import WeatherMainInfo from './WeatherMainInfo';
import LoadingComponent from './LoadingComponent';

import styles from './weatherApp.module.css';

 function WeatherApp() {
    const [weather, setweather]=useState(null);
    
    
    useEffect(()=>{
      loadInfo();


    },[]); /*useeffect para cargar codigo mientras renderiza algo */ 
    useEffect(()=>{
      document.title=`weather | ${weather?.location.name ?? ''}`

    },[weather]);

    async function loadInfo(city='london'){
        try {
            const request = await fetch(`${process.env.REACT_APP_URL}.json?key=${process.env.REACT_APP_KEY}&q=${city}&aqi=no`);
            
            const json = await request.json();

            setTimeout(()=>{/**esto es para que tarde en cargar */
              setweather(json);
            },2000);
            
            setweather(json);


            console.log(json);
        } catch (error) {
            
        }


    }
    
    
    function handleChangecity(city){
        setweather(null);
        loadInfo(city);
    }
  return (
    <div className={styles.weatherContainer}>
        <h1 className={styles.weather}>WeatherApp</h1>
        
        <WestherForm  onChangeCity={handleChangecity} />

        
        {weather? <WeatherMainInfo weather={weather} /> : <LoadingComponent/>}
    </div>
  )
}


export default WeatherApp;