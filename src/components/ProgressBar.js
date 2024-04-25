import React, { useEffect, useState } from 'react'
import '../components/ProgressBar.css';

const ProgressBar = ({value = 0, onComplete = ()=> {}}) => {

    const [percentage, setPercentage] = useState(value);

    useEffect(()=>{
        setPercentage(Math.min(100, Math.max(value,0)));
        if(value >= 100){
            onComplete();
        }
    },[value])
  return (
    <div className='progress'>
        <span style={{
            color: percentage > 48 ? "white" : "black"
        }}>
            {percentage.toFixed()}%
        </span>
        <div className='fill-color' style={{
            width: `${percentage}%`
        }}> 
        </div>
        
    </div>
  )
}

export default ProgressBar