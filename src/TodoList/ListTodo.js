const ListTodo = ({Todos, setTodos}) => {

    const changeState = (index) => {
        if (!Todos[index].isCompleted) {
            const updatedTodos =  [...Todos];
            updatedTodos[index].isCompleted = true;
            setTodos(updatedTodos)
        }
    }

    return (
        <div>
            <ul>
                {Todos.map((todo, index) => (
                    <li key={todo.id}>
                        {todo.name}
                        <span> </span>

                        <button onClick={() => {
                            let index = Todos.indexOf(todo)
                            Todos.splice(index, 1)
                            setTodos([...Todos])
                        }}>Eliminar</button>
                        <span> </span>

                        <button onClick={() => {
                            changeState(index)
                        }}>Actualizar</button>
                        <span> </span>

                        <span style={
                                {backgroundColor: todo.isCompleted ? 'green' : 'red', color:'white', fontWeight:'bold'}
                        }>{ todo.isCompleted ? 'Hecho' : 'Pendiente'}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListTodo;