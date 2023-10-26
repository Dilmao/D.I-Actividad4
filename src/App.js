import './App.css';
import React from 'react';
import Todo from './TodoList/Todo'
import Mail from './Message/Mail'

function App() {
  return (
    <div className="App">
      <h2>Actividad 4.1</h2>
      <Mail/>

      <br/><br/><hr/>

      <h2>Actividad 4.2</h2>
      <Todo/>
    </div>
  );
}

export default App;
