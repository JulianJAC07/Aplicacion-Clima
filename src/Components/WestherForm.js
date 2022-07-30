import React ,{useState} from 'react';
import styles from './weatherForm.module.css';


export default function WestherForm({onChangeCity}) {
    const [City,setCity]=useState('');
   
    function onChange(e){
        const value=e.target.value;
       
        if (value !==''){
            setCity(value);
        }
    }
    function handleSubmit(e){
        e.preventDefault();
        onChangeCity(City);

    }
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
        <input type='text' onChange={onChange} className={styles.input} />
    </form>
  )
}
