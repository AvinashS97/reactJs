import { useState } from 'react'
import './Todo.css'
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'
import { TodoDate } from './TodoDate'
import { getLocalStorageTodoData, setLocalStorageTodoData } from './TodoLocalStorage'




export const Todo = () => {
  const [task, setTask] = useState(()=> getLocalStorageTodoData());

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    // To check if the input field is empty or not...
    if (!content) return;
    //  To check if the data is already existing or not...
    // if (task.includes(inputValue)) return;
    const ifTodoContentMatched = task.find(
      curTask => curTask.content === content
    );
    if (ifTodoContentMatched) return;

    setTask(prevTask => [...prevTask, { id, content, checked }]);
  }

  // add data to local storage
  setLocalStorageTodoData(task);
  
  // todo handleDeleteTodo function
  const handleDeleteTodo = value => {
    const updatedTask = task.filter(curTask => curTask.content !== value);
    setTask(updatedTask);
  }

  // todo handleClearTodoData function
  const handleClearTodoData = () => {
    setTask([]);
  }

  // todo handleCheckedTodo function
  const handleCheckedTodo = content => {
    const updatedTask = task.map(curTask => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked }
      } else {
        return curTask;
      }
    })
    setTask(updatedTask);
  }

  return (
    <section className='todo-container'>
      <header>
        <h1>Todo List</h1>
        {/* === Date and Time === */}
    <TodoDate />
      </header>
      {/* === Todo Form === */}
      <TodoForm onAddTodo={handleFormSubmit} />

      <section className='myUnOrdList'>
        <ul>
          {task.map(curTask => {
            return (
              // { /* === TodoList ==== */ }
              <TodoList
                key={curTask.id}
                data={curTask.content}
                checked={curTask.checked}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleCheckedTodo={handleCheckedTodo}
              />
            )
          })}
        </ul>
      </section>
      <section>
        <button className='clear-btn' onClick={handleClearTodoData}>
          Clear All
        </button>
      </section>
    </section>
  )
}
