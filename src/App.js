import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import ToDoForm from './components/ToDos/ToDoForm';
import ToDoList from './components/ToDos/ToDoList';
import ToDosActions from './components/ToDos/ToDosActions';
import './App.css';

const App = () => {
	const [todos, setTodos] = useState([]);

	const addTodoHandler = (enteredText) => {
		setTodos((prevTodos) => {
			const updatedTodos = [...prevTodos];
			updatedTodos.unshift({
				text: enteredText,
				id: uuidv4(),
				isCompleted: false,
			});
			return updatedTodos;
		});
	};

	const deleteTodoHandler = (todoId) => {
		setTodos((prevTodos) => {
			const updatedTodos = prevTodos.filter((todo) => todo.id !== todoId);
			return updatedTodos;
		});
	};

	const toggleTodoHandler = (todoId) => {
		setTodos((prevTodos) => {
			const updatedTodos = prevTodos.map((todo) =>
				todo.id === todoId
					? { ...todo, isCompleted: !todo.isCompleted }
					: { ...todo }
			);
			return updatedTodos;
		});
	};

	const resetTodosHandler = () => {
		setTodos([]);
	};

	const clearCompletedTodosHandler = () => {
		setTodos((prevTodos) => {
			const updatedTodos = prevTodos.filter((todo) => !todo.isCompleted);
			return updatedTodos;
		});
	};

	let content = <p>Todo list is empty </p>;

	if (todos.length > 0) {
		content = (
			<ToDoList
				todos={todos}
				onDeleteTodo={deleteTodoHandler}
				onToggleTodo={toggleTodoHandler}
			/>
		);
	}

	const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;
	console.log(completedTodosCount);

	return (
		<div>
			<div id='todo-form'>
				<ToDoForm onAddTodo={addTodoHandler} />
			</div>
			<div id='todos-actions'>
				{!!todos.length && (
					<ToDosActions
						completedTodosExist={!!completedTodosCount}
						onResetTodos={resetTodosHandler}
						onClearCompletedTodos={clearCompletedTodosHandler}
					/>
				)}
			</div>
			<div id='todos'>{content}</div>
			<div id='completed-todos-count'>
				{completedTodosCount > 0 && (
					<div>{`You have completed ${completedTodosCount} ${
						completedTodosCount > 1 ? 'todos' : 'todo'
					}`}</div>
				)}
			</div>
		</div>
	);
};

export default App;
