import { useState } from "react"

const ListTodo = ({Todos, setTodos}) => {
    const [state, setState] = useState('Pendiente');

    function changeState(index) {
        setState('Hecho')
    }

    return (
        <div>
            <ul>
                {Todos.map(todo =>
                    <li key={todo} className={todo}>
                        {todo}
                        <span> </span>

                        {<button onClick={() => {
                            let index = Todos.indexOf(todo)
                            Todos.splice(index, 1)
                            setTodos([...Todos])
                        }}>Eliminar</button>}

                        <span> </span>
                        <button onClick={() => {
                            let index = Todos.indexOf(todo)
                            console.log(index)
                            changeState(index)
                        }}>Actualizar</button>

                        <span> </span>
                        <span>{state}</span>
                    </li>
                    )}
            </ul>
        </div>
    )
}

export default ListTodo;