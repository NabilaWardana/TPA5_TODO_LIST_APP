import './TodoList.css'

function TodoList(){

    return(
        <>
            <div className="todo-container">
                <div className="heading">
                    <h1 className='todo-title'>What's the plan for today?</h1>
                </div>
                <div className="add-todo">
                    <input type="text" name="" id="input-add" placeholder='What to do'/>
                    <button className='add-button'>add</button>
                </div>

                <div className="filter-button">
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>

                <div className="list-todo">
                    <div className="left">
                        <input type="checkbox" id="checkbox" />
                        <label for="checkbox">title</label>
                    </div>

                    <div className="right">
                        <i className="fas fa-pencil-alt" id="edit-icon"></i>
                        <i className="fas fa-trash" id="delete-icon"></i>
                    </div>

                </div>
                
            </div>
        </>
    )
}

export default TodoList