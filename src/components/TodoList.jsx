import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteItem, editItem, toggleTodo } from '../actions/todoActions'
import './TodoList.css'

function TodoList(){
    const dispatch = useDispatch()
    const [inputTodo, setInputTodo] = useState ("")
    const [editItemId, setEditItemId] = useState(null);
    const [filter, setFilter] = useState("All");
    const {todos} = useSelector(state => state)

    const handleSubmit = (e) => {
        e.preventDefault()

        const newTodo = {
            id: Date.now(), 
            title: inputTodo,
            isDone: false,
        }

        dispatch(addTodo(newTodo));

        setInputTodo("");

        // console.log(newTodo)
    }

    const handleDelete = (itemId) => {
        dispatch(deleteItem(itemId));
    };

    const handleEdit = (itemId, updatedTitle) => {
        dispatch(editItem(itemId, updatedTitle));
        setEditItemId(null);
    };

    const handleEditInputChange = (e) => {
        setInputTodo(e.target.value);
    }

    const handleEditItem = (itemId, title) => {
        setInputTodo(title);
        setEditItemId(itemId);

    };

    const handleCheckboxChange = (itemId) => {
        const updatedTodos = todos.map((item) => {
          if (item.id === itemId) {
            return {
              ...item,
              isDone: !item.isDone,
            };
          }
          return item;
        });
        dispatch(toggleTodo(itemId));

        console.log(todos)
    };

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
      };
      
      const filterTodos = (todos) => {
        if (filter === "Completed") {
          return todos.filter((todo) => todo.isDone);
        } else if (filter === "Active") {
          return todos.filter((todo) => !todo.isDone);
        }
        return todos;
    };
      

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
                        onChange={handleEditInputChange}
                    />
                    <button className='add-button'>add</button>
                </form>

                <div className="filter-button">
                    <button onClick={() => handleFilterChange("All")}>All</button>
                    <button onClick={() => handleFilterChange("Active")}>Active</button>
                    <button onClick={() => handleFilterChange("Completed")}>Completed</button>
                </div>
                
                {filterTodos(todos).map((item) => (
                    <div className="list-todo" key={item.id}>
                        {editItemId === item.id ? (
                            <form
                                className="edit-form"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleEdit(item.id, inputTodo);
                                }}
                            >
                                <input
                                    type="text"
                                    name="todo"
                                    className="edit-input"
                                    value={inputTodo}
                                    onChange={handleEditInputChange}
                                />
                                <button className="save-button" type="submit">Save</button>
                            </form>
                        ) : (
                            <>
                                <div className="left">
                                    <input type="checkbox" 
                                    id="checkbox" 
                                    checked={item.isDone}
                                    onChange={() => handleCheckboxChange(item.id)}
                                    />
                                    <label htmlFor="checkbox">{item.title}</label>
                                </div>

                                <div className="right">
                                    <i
                                        className="fas fa-pencil-alt"
                                        id="edit-icon"
                                        onClick={() => handleEditItem(item.id, item.title)}
                                    ></i>
                                    <i
                                        className="fas fa-trash"
                                        id="delete-icon"
                                        onClick={() => handleDelete(item.id)}
                                    ></i>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}

export default TodoList
