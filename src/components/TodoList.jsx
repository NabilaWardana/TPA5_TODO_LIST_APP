import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../actions/todoActions'
import './TodoList.css'

function TodoList(){
    const dispatch = useDispatch()
    const [inputTodo, setInputTodo] = useState ("")
    const {todos} = useSelector(state => state)
    // console.log(todos)

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(inputTodo);

        const newTodo = {
            id: Date.now(), 
            title: inputTodo,
            isDone: false,
        }

        dispatch(addTodo(newTodo));

        setInputTodo("");

        console.log(newTodo)

    }

    return(
        <>
            <div className="todo-container">
                <div className="heading">
                    <h1 className='todo-title'>What's the plan for today?</h1>
                </div>
                <form onSubmit={handleSubmit} className="add-todo">
                    <input 
                        type="text" 
                        name="todo" 
                        id="input-add" 
                        placeholder='What to do'
                        value={inputTodo}
                        onChange={e => setInputTodo(e.target.value)}
                        />
                    <button className='add-button'>add</button>
                </form>

                <div className="filter-button">
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>

                {todos.map(item => (
                    <div className="list-todo" key={item.id}>
                        <div className="left">
                            <input type="checkbox" id="checkbox" />
                            <label htmlFor="checkbox">{item.title}</label>
                        </div>

                        <div className="right">
                            <i className="fas fa-pencil-alt" id="edit-icon"></i>
                            <i className="fas fa-trash" id="delete-icon"></i>
                        </div>
                    </div>
                ))}
                
                
            </div>
        </>
    )
}

export default TodoList