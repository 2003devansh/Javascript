import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [task,setTask] = useState('') ;
  const [tasks,setTasks] = useState([])  ;

  const handleAdd = () =>{
    if(task.trim() !== ''){
      const newTask = {
        id: Date.now() ,
        task : task ,
        completed : false 
      }
      setTasks((prev)=>[...prev,newTask]) ;
      setTask('') ; 
    }
  }

  const handleToggle = (id) =>{
      setTasks(prev => 
        prev.map(task => task.id === id ? {...task,completed : !task.completed} : task)
      )
    }

    const handleDelete = (id) =>{
      setTasks(prev => 
      prev.filter(task => task.id !== id))
    }
  return (
  <div>
    <h1>To-do List</h1>
      <div className='container'>
      <input
      className='input'
      type='input'
      value={task}
      placeholder='write a task'
      onChange={(event)=> setTask(event.target.value)}
      ></input>
      <button className='btn' onClick={handleAdd}>+</button>
<ul>
  {tasks.map((item) => (
    <li key={item.id}>
      <span className={`task-text ${item.completed ? 'completed' : ''}`}>
        {item.task}
      </span>
      <button
        className="task-btn"
        onClick={() => handleToggle(item.id)}
        title={item.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
      >
        ✅
      </button>
      <button
        className="task-btn delete"
        onClick={() => handleDelete(item.id)}
        title="Delete Task"
      >
        🗑️
      </button>
    </li>
  ))}
</ul>

    </div>
  </div>
  )
}

export default App
