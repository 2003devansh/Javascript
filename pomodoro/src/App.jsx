import React from 'react'
import { useState } from 'react'

const App = () => {

  const formatTime = (sec) =>{
    const minutes = Math.floor(sec / 60).toString().padStart(2,'0') ;
    const seconds = Math.floor(sec % 60).toString().padStart(2,'0') ;
    return `${minutes}:${seconds}` ; 
  }

  const [workTime,setWorkTime] = useState(25) ;
  const [breakTime,setBreakTime] = useState(5) ;
  const [timeLeft,setTimeLeft] = useState(25*60) ;
  const [isRunning,setIsRunning] = useState(false) ;
  const [mode,setMode] = useState("work") ; 
  return (
    <div>
      <p>Tell your work time (minutes)</p>
     <input type="number" min="1" value={workTime} 
     onChange={(event)=>{
      setWorkTime(Number(event.target.value)) ;
      setTimeLeft(Number(event.target.value) * 60)
     }}
     />

     <p>Tell your break time (minutes)</p>
     <input type="number" min="1"  
     value={breakTime}
     onChange={(event)=>{
      setBreakTime(Number(event.target.value)) 
     }}
     />

      <span>{"  "}</span>

      <div className='btns'>
      <button>start</button>
      <button>pause</button>
      <button>reset</button>
      </div>
    </div>
  )
}

export default App
