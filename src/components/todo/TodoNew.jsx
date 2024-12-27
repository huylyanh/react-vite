import { useState } from "react"

//component: là HTML
const TodoNew = (props) => {
    console.log(">>> check props TodoNew:", props)

    //sủ dụng công cụ của React: useState hook (getter/ setter)
    //const valueInput = "huy";

    //dinh nghia 1 bien và 1 function de cap nhat bien, su dung hook useState
    //destructuring array
    const [valueInput, setValueInput] = useState("Gia tri khoi tao")

    const { addNewTodo } = props;
    //addNewTodo("Huy here")

    //lấy giá trị của ô input
    const handleOnChange = (input) => {
        setValueInput(input)
    }

    const handleClick = () => {
        addNewTodo(valueInput)
        setValueInput("")
    }

    return (
        <div className='todo-new'>
            <input type="text"
                // 1) Cách làm 1: passing a function
                // Do su dung hame onChange, nên đầu hàm, nó sẽ tự động cho chúng ta biến "event" (đây là event của HTML)
                onChange={(event) => handleOnChange(event.target.value)}
                value={valueInput}
            />
            <button style={{ cursor: "pointer" }}
                // 2) Cách làm 2: passing a function
                // chu y khong co dau (), neu co (): react se chay luon function do, du chua click nut 
                onClick={handleClick}
            >Add</button>

            <div>
                My text input is {valueInput}
            </div>
        </div >
    )
}

export default TodoNew;
