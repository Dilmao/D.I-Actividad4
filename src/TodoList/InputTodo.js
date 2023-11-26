const InputTodo = (props) => {
    return (
        <div>
            <input type="text" onChange={props.ChangeInput} value={props.value}/>
            <span> </span>
            <button onClick={props.ClickButton}>Añadir Todo</button>
        </div>
    )
}

export default InputTodo;