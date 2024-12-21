import { useEffect, useState } from 'react'
import './Todo.css'
import { MdCheck, MdDeleteForever } from 'react-icons/md'
import { TodoForm } from './TodoForm'

export const Todo = () => {
  const [inputValue, setInputValue] = useState('')
  const [task, setTask] = useState([])
  const [dateTime, setDateTime] = useState('')

  const handleInputChange = value => {
    setInputValue(value)
  }
  const handleFormSubmit = event => {
    event.preventDefault()
    if (!inputValue) return;
    if (task.includes(inputValue)) {
      setInputValue('')
      return;
    }
    setTask(prevTask => [...prevTask, inputValue])
    setInputValue('')
  }



  // todo Date And Time
  useEffect(() => {
      const interval = setInterval(() => {
      const now = new Date()
      const formattedDate = now.toLocaleDateString()
      const formattedTime = now.toLocaleTimeString()
      setDateTime(`${formattedDate} - ${formattedTime}`)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // todo handleDeleteTodo function
  const handleDeleteTodo = (value) => {
    // console.log(task);
    // console.log(value);
    const updatedTask = task.filter ((curTask) => curTask !== value );
    setTask(updatedTask);
  };
  
  // todo handleClearTodoData function
  const handleClearTodoData = () => {
    setTask ([]);
  }


  return (
    <section className='todo-container'>
    <header>
      <h1>Todo List</h1>
      <h2 className='date-time'>{dateTime} </h2>
    </header>
    < TodoForm/>

      <section className='myUnOrdList'>
        <ul>
          {task.map((curTask, index) => {
            return (
              <li key={index} className='todo-item'>
                <span>{curTask}</span>
                <button className='check-btn'>
                  <MdCheck />
                </button>
                <button className='delete-btn' onClick={()=> handleDeleteTodo(curTask)}>
                  <MdDeleteForever />
                </button>
              </li>
            )
          })}
        </ul>
      </section>
      <section>
        <button className='clear-btn' onClick={handleClearTodoData}>Clear All</button>
      </section>
    </section>
  )
}
