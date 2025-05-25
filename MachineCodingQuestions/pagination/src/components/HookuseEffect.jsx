import React, { useEffect, useState } from 'react'

const HookuseEffect = () => {
  const [screenWidth,setScreenWidth] = useState(window.innerWidth) ;

  const [count, setCount] = useState({
    num: 1,
    id: "abcd"
  });

  const handleAdd = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num + 1
      }
    })
  }

  const handleSubsract = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num - 1
      }
    })
  }

  useEffect(()=>{
    // console.log(" i ran");
    // setCount({
    //     num: 5 , 
    //     id: "Random"
    // })

    window.addEventListener("resize",()=>{
        setScreenWidth(window.innerWidth) ;
    })
     
  },[])

  return (
    <div>
      <button onClick={handleSubsract}>-</button>
      {count.num}
      {count.id}
      <button onClick={handleAdd}>+</button>
      {screenWidth}
    </div>
  )
}

export default HookuseEffect
