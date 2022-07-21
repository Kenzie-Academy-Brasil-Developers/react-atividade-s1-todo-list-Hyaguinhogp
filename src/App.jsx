import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    setTodos((oldsTodos) => [...oldsTodos, newTodo]);
  }

  function handleTodo(todoToRemove) {
    setTodos(todos.filter(todo => todo !== todoToRemove));
  }

  return (
    <div className='app-container'>
      <Form addTodo={addTodo} />
      <TodoList todos={todos} handleTodo={handleTodo} />
    </div>
  );
}

export default App;
