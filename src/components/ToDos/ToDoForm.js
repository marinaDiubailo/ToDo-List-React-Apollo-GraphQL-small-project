import React, { useState } from 'react';
import styles from './ToDoForm.module.css';

const ToDoForm = (props) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [isValid, setIsValid] = useState(true);

	const todoInputChangeHandler = (event) => {
		if (event.target.value.trim().length > 0) {
			setIsValid(true);
		}
		setEnteredValue(event.target.value);
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		if (enteredValue.trim().length === 0) {
			setIsValid(false);
			return;
		}
		props.onAddTodo(enteredValue);
		setEnteredValue('');
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<div
				className={`${styles['form-control']} ${!isValid && styles.invalid}`}
			>
				<label>Todo App</label>
				<input
					type='text'
					value={enteredValue}
					placeholder='enter new todo'
					onChange={todoInputChangeHandler}
				/>
			</div>
			<button title='Submit' className={styles.button} type='submit'>
				Submit
			</button>
		</form>
	);
};

export default ToDoForm;
