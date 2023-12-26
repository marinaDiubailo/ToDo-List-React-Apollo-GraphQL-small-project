import ToDo from './ToDo.js';
//import styles from './ToDoList.module.css';

const ToDoList = (props) => {
	return (
		<ul>
			{props.todos.map((todo) => (
				<ToDo
					key={todo.id}
					id={todo.id}
					isCompleted={todo.isCompleted}
					onDelete={props.onDeleteTodo}
					onToggle={props.onToggleTodo}
				>
					{todo.text}
				</ToDo>
			))}
		</ul>
	);
};

export default ToDoList;
