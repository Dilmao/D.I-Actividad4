import {useState} from 'react';
import InputTodo from './InputTodo';
import ListTodo from './ListTodo';

const initialTodos = [
    { id: 1, name: "Todo 1", isCompleted: false },
    { id: 2, name: "Todo 2", isCompleted: false }
  ];

const Todo = () => {
    const [todos, setTodos] = useState(initialTodos)
    const [value, setValue] = useState("")

    function handleAddTodo(event) {
        setValue(event.target.value)
    }

    let contador = todos.length

    function addList() {
        if (value.trim() === "") {
            return;
        }
      
        const newTodo = { id: contador, name: value, isCompleted: false };
        setTodos([...todos, newTodo]);
        setValue("");
    }

    return (
        <div>
            <InputTodo ChangeInput={handleAddTodo} Value={value} ClickButton={addList}/>
            <ListTodo Todos={todos} setTodos={setTodos}/>
        </div>
    )
}

export default Todo;