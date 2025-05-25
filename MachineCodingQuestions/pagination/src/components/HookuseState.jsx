import React, { useState } from 'react'

const HookuseState = () => {
    const [count,setCount] = useState({
        num : 1 , 
        id : "abcd"
    }) ;

    const handleAdd = ()=>{
        setCount((prev)=>{
           return {
            ...prev , 
            num : prev.num + 1 
           }
        })
    }

    const handleSubsract =()=>{
        setCount((prev)=>{
          return {
            ...prev,
            prev : prev.num  -1 
          }
        })
    }
  return (
    <div>
      <button onClick={handleSubsract}>-</button>
      {count.num}
      <button onClick={handleAdd}>+</button>
    </div>
  )
}

export default HookuseState
