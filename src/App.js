//import { v4 as uuidv4 } from 'uuid';
import ToDoForm from './components/ToDos/ToDoForm';
import ToDoList from './components/ToDos/ToDoList';
import TotalCount from './components/ToDos/TotalCount';
//import ToDosActions from './components/ToDos/ToDosActions';
import './App.css';

const App = () => {
    // const resetTodosHandler = () => {
    //     // setTodos([]);
    // };

    // const clearCompletedTodosHandler = () => {
    //     // setTodos((prevTodos) => {
    //     //     const updatedTodos = prevTodos.filter((todo) => !todo.isCompleted);
    //     //     return updatedTodos;
    //     // });
    // };

    return (
        <div>
            <ToDoForm />
            {/* <div id="todos-actions">
                {!!data.todos.length && (
                    <ToDosActions
                    // completedTodosExist={!!completedTodosCount}
                    // onResetTodos={resetTodosHandler}
                    // onClearCompletedTodos={clearCompletedTodosHandler}
                    />
                )}
            </div> */}
            {/* <div id="todos">{content}</div> */}
            <ToDoList />
            <TotalCount />
        </div>
    );
};

export default App;
