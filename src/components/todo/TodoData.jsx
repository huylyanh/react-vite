const TodoData = (props) => {
    // props là 1 biến object {}
    // {
    //     name: "Huy",
    //     age: 25,
    //     data: {}
    // }

    // destructuring object:
    // const { name } = props;
    const { name, age, data } = props;

    // hay viet bang cach khac
    // const name = props.name;
    // const age = props.age;
    // const data = props.data;

    console.log(">>> check props: ", props)
    return (
        <div className='todo-data'>
            <div>My name is {name}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>

    )
}

export default TodoData;
