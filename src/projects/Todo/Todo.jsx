import './Todo.css'
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'
import { TodoDate } from './TodoDate'
import { useLocalStorage } from './useLocalStorage'

export const Todo = () => {
  const [task, setTask] = useLocalStorage('task', [])

  const handleFormSubmit = inputValue => {
    const { id, content, checked } = inputValue

    //to check if the input field is empty or not
    if (!content) return

    // to check if the data is already existing or not
    const ifTodoContentMatched = task.find(
      curTask => curTask.content === content
    )
    if (ifTodoContentMatched) return
    setTask(prevTask => [...prevTask, { id, content, checked }])
  }

  //todo handleDeleteTodo function
  const handleDeleteTodo = value => {
    const updatedTask = task.filter(curTask => curTask.content !== value)
    setTask(updatedTask)
  }

  //todo handleClearTodoData functionality
  const handleClearTodoData = () => {
    setTask([])
  }

  //todo handleCheckedTodo functionality
  const handleCheckedTodo = content => {
    const updatedTask = task.map(curTask => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked }
      } else {
        return curTask
      }
    })
    setTask(updatedTask)
  }

  return (
    <section className='todo-container'>
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className='myUnOrdList'>
        <ul>
          {task.map(curTask => {
            return (
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
          Clear all
        </button>
      </section>
    </section>
  )
}
