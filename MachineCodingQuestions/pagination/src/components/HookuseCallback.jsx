import React, { useState } from 'react'

// similar to useMemo , useMemo memoize the value but useCallback memoize the whole function 


const HookuseCallback = () => {
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
      {count.id}
      <button onClick={handleAdd}>+</button>
    </div>
  )
}

export default HookuseCallback
