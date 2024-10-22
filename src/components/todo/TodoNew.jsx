import { useState } from "react"

//component: là HTML
const TodoNew = (props) => {
    console.log(">>> check props TodoNew:", props)

    //useState hook (getter/ setter)
    //const valueInput = "huy";

    //dinh nghia 1 bien và 1 function de cap nhat bien, su dung hook useState
    //destructuring array
    const [valueInput, setValueInput] = useState("gia tri khoi tao")

    const { addNewTodo } = props;
    //addNewTodo("Huy here")

    const handleClick = () => {
        addNewTodo(valueInput)
        setValueInput("")
    }

    //lấy giá trị của ô input
    const handleOnChange = (input) => {
        setValueInput(input)
    }

    return (
        <div className='todo-new'>
            <input type="text"
                // 1) Muốn thực thi function: phải bọc vào 1 arrow function
                // Do su dung hame onChange, nên đầu hàm, nó sẽ tự động cho chúng ta biến "event" (đây là event của HTML)
                onChange={(event) => handleOnChange(event.target.value)}
                value={valueInput}
            />
            <button style={{ cursor: "pointer" }}
                // 2) Không thực thi function
                // chu y khong co dau dong mo ngoac, neu co: bảo react chay luon function do cho tao
                onClick={handleClick}>Add</button>

            <div>
                My text input is {valueInput}
            </div>
        </div>
    )
}

export default TodoNew;
