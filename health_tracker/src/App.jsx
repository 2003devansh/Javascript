import React, { useState } from 'react'
import Header from './components/Header'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList';

const App = () => {
  const [feedbackList,setFeedbackList] = useState([]) ;

  const addFeedBack = (newFeedBack) =>{
    setFeedbackList((prev)=> [newFeedBack,...prev]);  
  }
  return (
    <div>
      <Header text="Feedback Board" />
      <FeedbackForm addFeedBack = {addFeedBack} />
      <FeedbackList feedbackList = {feedbackList}/>
    </div>
  )
}

export default App
