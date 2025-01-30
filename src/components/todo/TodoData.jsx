const TodoData = (props) => {
    console.log("---- check props TodoData: ", todoList)

    // props là 1 biến object {}
    // {
    //     name: "Huy",
    //     age: 25,
    //     data: {}
    // }

    // destructuring object:
    // const { name } = props;
    //const { name, age, data } = props;

    // hay viet bang cach khac
    // const name = props.name;
    // const age = props.age;
    // const data = props.data;

    const { todoList, deleteTodo } = props;

    const handleClick = (id) => {
        deleteTodo(id)
    }

    return (
        <div className='todo-data'>
            {/* <div>My name is {name}</div> */}

            {/* hàm map: mỗi lần lập chạy qua 1 phần tử chay qua đoạn code của function bên trong */}
            {/* hàm map: tham số đầu tiên là phần tử lặp, thám số 2 chỉ số của mangL phan tu thu may */}

            {todoList.map((item, index) => {
                console.log(">>>check map: ", item, index)
                return (
                    <div className={`todo-item`} key={item.id}>
                        <div>{item.name}</div>
                        <button
                            onClick={() => handleClick(item.id)}
                            style={{ cursor: "pointer" }}>Delete</button>
                    </div>)
            })}

            {/* <div>Learning React</div>
            <div>Watching Youtube</div> */}
            {/* <div>
                {JSON.stringify(props.todoList)}
            </div> */}
        </div>
    )
}

export default TodoData;
