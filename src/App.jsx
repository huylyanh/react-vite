import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Watching Youtube" }
  ])

  const prop_1 = "Huy Lý";
  const prop_2 = 20;
  const data = {
    address: "HCMC",
    country: "VN"
  }

  // JSX: cho phep viet js trong html bang cach su dung {}
  // {}: dau ngoac tuong tu nhu object có {key:value}

  const addNewTodo = (name) => {
    alert(`call me ${name}`)
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        // khai bao props
        name={prop_1}
        age={prop_2}
        data={data}
        todoList={todoList}
      />

      <div className='todo-image'>
        {/* su dung bien so ben trong JSX */}
        <img src={reactLogo} className="logo" />
      </div>
    </div>
  )
}

export default App
