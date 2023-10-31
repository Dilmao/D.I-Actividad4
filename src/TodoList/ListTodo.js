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
                    <li key={todo.id} className={todo.isCompleted ? 'Hehco' : 'Pendiente'}>
                        {todo.name}
                        <span> </span>

                        {<button onClick={() => {
                            const updatedTodos = Todos.filter((_, i) => i !== index);
                            setTodos(updatedTodos);
                        }}>Eliminar</button>}
                        <span> </span>

                        <button onClick={() => {
                            changeState(index)
                        }}>Actualizar</button>
                        <span> </span>

                        <span>{todo.isCompleted ? 'Hecho' : 'Pendiente'}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListTodo;