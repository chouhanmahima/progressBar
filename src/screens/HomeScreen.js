import React, { useEffect, useState } from 'react'
import '../screens/HomeScreen.css';
import ProgressBar from '../components/ProgressBar';

const HomeScreen = () => {

    const [value,setValue] = useState(0);
    const [sucessBar,setSucessBar] = useState(false);

    useEffect(()=>{
        setInterval(()=>{
            setValue((val) => val + 0.1)
        },20)
    },[])
  return (
    <div className='container'>
        <div className='main-container'>
         <h1 className='title'>Progress Bar</h1>
         <ProgressBar
         value={value}
         onComplete={() => setSucessBar(true)}
         >
         </ProgressBar>
         <span className='display'>{sucessBar ? "Completed!" : "Loading..."}</span>
        </div>
    </div>
  )
}

export default HomeScreen;