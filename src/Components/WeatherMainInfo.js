import React from 'react';
import styles from './weatherMainInfo.module.css';

export default function WeatherMainInfo({weather}) {
  return (
    <div className={styles.mainInfo}>
        
        <div className={styles.city}>{weather?.location.name} </div>
        
        <div className={styles.country}>{weather?.location.country} </div>
        
        <div className={styles.row}>
            
            <div>
                <img src={`${weather?.current.condition.icon}`} width="150"  alt={weather?.current.weather_descriptions} />
            </div>
            
            <div className={styles.weatherConditions}>
                
                <div className={styles.condition}>{weather?.current.temp_c}° </div>
                
                <div className={styles.current}>{weather?.current.last_updated} </div>
            </div>
        </div>
        
        
       <div> 
         <iframe title='mapa' src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d733552.4847813101!2d${weather?.location.lon}!3d${weather?.location.lat}53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1659140850034!5m2!1ses!2sar`} width="100%" height="450"style= {{border :0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    
    
    
    </div>
  )
}
