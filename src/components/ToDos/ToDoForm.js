import { useState } from 'react';
import { useMutation } from '@apollo/client';
import styles from './ToDoForm.module.css';
import { ADD_TODO, ALL_TODO } from '../../apollo/todos';

const ToDoForm = () => {
    const [enteredValue, setEnteredValue] = useState('');
    const [addTodo, { loading, error }] = useMutation(ADD_TODO, {
        /**
         *  делает запрос на сервер и возвращает все данные,
         * один из вариантов, используется не часто
         */
        // refetchQueries: [{
        //     query: ALL_TODO
        // }],

        update(cache, { data: { newTodo } }) {
            /**
             *  прочесть все значения, которые лежат в query: ALL_TODOб
             * таким образом получим все старые todos
             */
            const { todos } = cache.readQuery({ query: ALL_TODO });
            /**
             * обновляем cache -  записываем новые данные
             */
            cache.writeQuery({
                query: ALL_TODO,
                data: {
                    todos: [newTodo, ...todos],
                },
            });
        },
    });

    const addTodoHandler = (event) => {
        event.preventDefault();
        if (enteredValue.trim().length) {
            addTodo({
                variables: {
                    title: enteredValue,
                    userId: 123,
                    isCompleted: false,
                },
            });
        }
        setEnteredValue('');
    };

    const todoInputChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const keyDownHandler = (event) => {
        if (event.key === 'Enter') addTodoHandler();
    };

    if (error) return <h2>Error</h2>;
    if (loading) return <div>Loading</div>;

    return (
        <div className={styles['todo-form']}>
            <form onSubmit={addTodoHandler}>
                <div className={styles['form-control']}>
                    <label>Todo App</label>
                    <input
                        type="text"
                        value={enteredValue}
                        placeholder="enter new todo"
                        onChange={todoInputChangeHandler}
                        onKeyDown={keyDownHandler}
                    />
                </div>
                <button title="Submit" className={styles.button} type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ToDoForm;
