import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
//import styles from './ToDosActions.module.css';

const ToDosActions = ({
	onResetTodos,
	onClearCompletedTodos,
	completedTodosExist,
}) => {
	return (
		<>
			<Button title='Reset Todos' onClick={onResetTodos}>
				{' '}
				<RiRefreshLine />{' '}
			</Button>
			<Button
				title='Clear completed Todos'
				onClick={onClearCompletedTodos}
				disabled={!completedTodosExist}
			>
				{' '}
				<RiDeleteBin2Line />{' '}
			</Button>
		</>
	);
};
export default ToDosActions;
