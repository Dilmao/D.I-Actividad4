import {useState} from 'react';
import InputTodo from './InputTodo';
import ListTodo from './ListTodo';

const initialTodos = [
    { id: "Todo 1", name: "Todo 1", isCompleted: false },
    { id: "Todo 2", name: "Todo 2", isCompleted: false }
  ];

const Todo = () => {
    const [todos, setTodos] = useState(initialTodos)
    const [value, setValue] = useState("")

    function handleAddTodo(event) {
        setValue(event.target.value)
    }

    function addList() {
        if (value.trim() === "") {
            return;
        }
      
          const newTodo = { id: value, name: value, isCompleted: false };
          setTodos([...todos, newTodo]);
          setValue("");
    }

    return (
        //Me gustaria aumentar la sangria a 1.5
        <div>
            <InputTodo ChangeInput={handleAddTodo} Value={value} ClickButton={addList}/>
            <ListTodo Todos={todos} setTodos={setTodos}/>
        </div>
    )
}

export default Todo;