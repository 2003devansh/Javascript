import React, { useState } from 'react'

const FeedbackForm = ({addFeedBack}) => {
  const [text,setText] = useState("");
  const [rating,setRating] = useState(0);

  const handleSubmit = (event) =>{
     event.preventDefault() ;

     if(text.trim().length < 10){
        alert("feedback must be more than 10 character")
        return ; 
     }

     if(rating === 0){
        alert("please rate")
        return 
     }

     addFeedBack({text,rating}); 
     setText(""); 
     setRating(0); 
     
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Write your feedback here"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-3 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />


        <div className="mb-5 flex justify-between max-w-xs mx-auto">
        {[1, 2, 3, 4, 5].map((item) => (
          <label key={item} className="flex flex-col items-center cursor-pointer">
            <input
              type="radio"
              name="rating"
              value={item}
              checked={rating === item}
              onChange={() => setRating(item)}
              className="hidden"
            />
            <div 
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 
                ${rating === item ? 'bg-blue-500 border-blue-500 text-white' : 'border-gray-300 text-gray-500'}
              `}
            >
              {item}
            </div>
          </label>
        ))}
      </div>

      <button 
        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
      >
        Submit
      </button>
      </form>
    </div>
  )
}

export default FeedbackForm
