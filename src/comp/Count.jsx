import React, { useState } from 'react'
import styles from "./st.module.css";
export const Count = () => {
     const [Counter , setCounter]= useState(0);
     const handleClick=(e)=>{
        if(e.target.name ==="Inc"){
            setCounter(Counter+1);
        }
        else{
            if(e.target.name==="Dub"){
                setCounter(Counter * 2);
            }
            else{
                setCounter(Counter-1)
            }
        }
     }
  return (
    <div>
        <p className={Counter % 2 ===0 ? styles.greenCol : styles.redCol}>
            Count={Counter}
            </p>
        <button name="Inc" onClick={handleClick} >
            Increment
        </button>
        <button name="Dec" onClick={handleClick} >
            Decrement
         </button>
         <button name="Dub" onClick={handleClick} >
            Dubble
         </button>
    </div>
  );
}

export default Count;