import './styles.css';
import { BsCheckLg } from 'react-icons/bs';

const TodoList = ({todos, handleTodo}) => {
    return (
        <ul className="todo-list">
            {
                todos.map((todo, key) => (
                    <li key={key} className="todo-list__item">
                        <p className="item-title">{todo}</p>
                        <button 
                        className="item-remove-button"
                        onClick={(event) => {
                            event.preventDefault();
                            handleTodo(todo);
                        }}
                        ><BsCheckLg className="checked-icon" /> </button>
                    </li>
                ))
            }
        </ul>
    );
}

export default TodoList;