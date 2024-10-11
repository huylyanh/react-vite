//component: là HTML
const TodoNew = (props) => {
    console.log(">>> check props:", props)

    const { addNewTodo } = props;
    //addNewTodo("Huy here")

    const handleClick = () => {
        alert("click me")
    }

    const handleOnChange = (name) => {
        //console.log(">>> handleOnChange", event.target.value)
        console.log(">>> handleOnChange", name)
    }

    return (
        <div className='todo-new'>
            <input type="text"
                // 1) Muốn thực thi function: phải bọc vào 1 arrow function
                // Do su dung hame onChange, nên đầu hàm, nó sẽ tự động
                // cho chúng ta biến "event" (đây là event của HTML)
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button style={{ cursor: "pointer" }}
                // 2) Không thực thi function
                // chu y khong co dau dong mo ngoac
                // neu co: bảo react chay luon function do cho tao
                onClick={handleClick}>Add</button>
        </div>
    )
}

export default TodoNew;
