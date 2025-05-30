import React from 'react'

const FeedbackList = ({feedbackList}) => {
  return (
    <div>
      {feedbackList.length === 0 ? (
        <p className='text-gray-500 text-center'>No feedBack yet</p>
      ): (
        feedbackList.map((item,index)=>{
           return  <div key={index} className='bg-white p-4 rounded shadow'>
            <p className='text-lg font-medium'>Rating: {item.rating}</p>
            <p className='text-gray-700'>{item.text}</p>
           </div>
        })
      )}
    </div>
  )
}

export default FeedbackList
