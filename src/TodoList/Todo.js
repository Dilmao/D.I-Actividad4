import {useState} from 'react';
import InputTodo from './InputTodo';
import ListTodo from './ListTodo';

const Todo = () => {
    const [todos, addTodos] = useState(["Todo 1", "Todo 2"])
    const [value, setValue] = useState("")

    function saveValue(event) {
        setValue(event.target.value)
    }

    function addList(){
        addTodos([...todos, value])
    }

    return (
        //Me gustaria aumentar la sangria a 1.5
        <div>
            <InputTodo ChangeInput={saveValue} Value={value} ClickButton={addList}/>
            <ListTodo Todos={todos} setTodos={addTodos}/>
        </div>
    )
}

export default Todo;