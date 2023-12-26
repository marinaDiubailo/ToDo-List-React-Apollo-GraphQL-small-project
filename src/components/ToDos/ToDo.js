import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './ToDo.module.css';

const ToDo = (props) => {
	const deleteHandler = () => {
		props.onDelete(props.id);
	};

	const toggleHandler = () => {
		props.onToggle(props.id);
	};

	return (
		<li
			className={`${styles['todo-item']} ${
				props.isCompleted ? styles['completed-todo'] : ''
			}`}
		>
			<RiTodoFill className={styles['todo-icon']} />
			<div className={styles['todo-text']}>{props.children}</div>
			<RiDeleteBin2Line
				className={styles['todo-icon-delete']}
				onClick={deleteHandler}
			/>
			<FaCheck className={styles['todo-icon-check']} onClick={toggleHandler} />
		</li>
	);
};

export default ToDo;
