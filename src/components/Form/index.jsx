import { useState } from 'react';
import './styles.css';

const Form = ({addTodo}) => {

    let [todoInput, setTodoInput] = useState('');

    return (
        <form className="create-todo__form" action="" >

            <input 
            className="create-todo__input" 
            type="text" 
            placeholder="Nova tarefa" 
            onChange={(event) => setTodoInput(event.target.value)} />

            <button 
            className="create-todo__button" 
            onClick={(event) => {
                event.preventDefault();
                addTodo(todoInput);
            }}>Enviar</button>
        </form>
    );
}

export default Form;