const TodoNew = (props) => {
    console.log("props:", props)

    const { addNewTodo } = props;
    //addNewTodo("Huy")

    return (
        <div className='todo-new'>
            <input type="text" />
            <button>Add</button>
        </div>
    )
}

export default TodoNew;
