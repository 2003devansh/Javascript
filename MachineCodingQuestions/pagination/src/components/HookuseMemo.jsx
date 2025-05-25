import React, { useMemo } from 'react'

import { useState, useEffect } from 'react'

const HookuseMemo = () => {

    // useMemo()
    const [show,setShow] = useState(false) ;

   
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

   const handleChange = useMemo(()=>{
        for(let i = 0 ; i <= 10000000 ; i++){}
        return count.num * 2 ; 
    },[])

  return (
    <div>
      <button onClick={handleSubsract}>-</button>
      {count.num}
      {show && count.id} 
      <button onClick={handleAdd}>+</button>
      {screenWidth}
      <p>{handleChange}</p>
      <button onClick={()=>{
        setShow(prev => !prev)
      }}> change</button>
    </div>
  )
}

export default HookuseMemo 
