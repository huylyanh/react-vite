const TodoData = (props) => {
    //const TodoData = ({ name }) => {
    // props là 1 biến object {}
    const { name } = props;

    // hay viet bang cach khac
    // const name = props.name;
    // const age = props.age;
    // const data = props.data;

    //console.log("check props: ", props)
    return (
        <div className='todo-data'>
            <div>My name is {name}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
        </div>

    )
}

export default TodoData;
