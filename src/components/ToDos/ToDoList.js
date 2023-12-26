import ToDo from './ToDo.js';
import { useQuery, useMutation } from '@apollo/client';
import { ALL_TODO, UPDATE_TODO, DELETE_TODO } from '../../apollo/todos';
//import styles from './ToDoList.module.css';

const ToDoList = () => {
    const { loading, data, error } = useQuery(ALL_TODO);
    const [toggleTodo, { error: updateError }] = useMutation(UPDATE_TODO);
    const [removeTodo, { error: deleteError }] = useMutation(DELETE_TODO, {
        /**
         * второй вариант обновления cache, используем модификацию
         * передаем название оригинального серверного метода, не alias
         */
        update(cache, { data: { removeTodo } }) {
            cache.modify({
                fields: {
                    allTodos(currentTodos = []) {
                        return currentTodos.filter(
                            (todo) => todo.__ref !== `Todo:${removeTodo.id}`,
                        );
                    },
                },
            });
        },
    });

    if (error || updateError || deleteError) return <h2>Error</h2>;
    if (loading) return <div>Loading...</div>;

    return (
        <ul>
            {data.todos.length ? (
                data.todos.map((todo) => (
                    <ToDo
                        key={todo.id}
                        id={todo.id}
                        isCompleted={todo.isCompleted}
                        onDelete={removeTodo}
                        onToggle={toggleTodo}
                    >
                        {todo.title}
                    </ToDo>
                ))
            ) : (
                <p>Todo list is empty </p>
            )}
        </ul>
    );
};

export default ToDoList;
