import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {

  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React" },
    // { id: 2, name: "Watching Youtube" }
  ])

  // const prop_1 = "Huy Lý";
  // const prop_2 = 20;
  // const data = {
  //   address: "HCMC",
  //   country: "VN"
  // }

  // JSX: cho phep viet js trong html bang cach su dung {}
  // {}: dau ngoac tuong tu nhu object có {key:value}

  const addNewTodo = (name) => {
    // alert(`call me ${name}`)

    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }

    //1) nếu dùng array.push: hàm này trả về chiều dài mảng, làm react khong nen thao tac truc tiep bien state
    //todoList.push(newTodo)
    //...: là copy lại data cũ của todoList và thêm phần tử vào
    //goi là: js spread syntax
    setTodoList([...todoList, newTodo])
  }

  const randomIntFromInterval = (min, max) => { //min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const deleteTodo = (id) => {
    const newTodoList = todoList.filter(item => item.id !== id) // quét từng phần tử, chỉ giữ lại các phần tử có id khác id truyền vào
    // console.log(">>> newTodoList: ", newTodoList)
    setTodoList(newTodoList)
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>

      <TodoNew
        addNewTodo={addNewTodo}
      />

      {todoList.length > 0 ?
        <TodoData
          // khai bao props
          // name={prop_1}
          // age={prop_2}
          // data={data}
          todoList={todoList}
          deleteTodo={deleteTodo}
        />
        :
        <div className='todo-image'>
          <img src={reactLogo} className="logo" />
        </div>
      }

      {/* {todoList.length > 0 &&
        <TodoData
          // khai bao props
          // name={prop_1}
          // age={prop_2}
          // data={data}
          todoList={todoList}
        />
      }

      {todoList.length === 0 &&
        <div className='todo-image'>
          <img src={reactLogo} className="logo" />
        </div>
      } */}

    </div>
  )
}

export default App
