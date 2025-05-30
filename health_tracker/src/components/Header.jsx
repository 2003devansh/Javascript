import React from 'react'

const Header = ({text}) => {
  return (
    <div>
      <h1 className='bg-blue-600 text-white p-4 text-center text-xl font-semibold'>{text}</h1>
    </div>
  )
}

export default Header
