import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './ToDo.module.css';

const ToDo = ({ children, onToggle, isCompleted, id, onDelete }) => {
    return (
        <li
            className={`${styles['todo-item']} ${
                isCompleted ? styles['completed-todo'] : ''
            }`}
        >
            <RiTodoFill className={styles['todo-icon']} />
            <div className={styles['todo-text']}>{children}</div>
            <RiDeleteBin2Line
                className={styles['todo-icon-delete']}
                onClick={() =>
                    onDelete({
                        variables: { id },
                    })
                }
            />
            <FaCheck
                className={styles['todo-icon-check']}
                onClick={() =>
                    onToggle({
                        variables: {
                            id,
                            isCompleted: !isCompleted,
                        },
                    })
                }
            />
        </li>
    );
};

export default ToDo;
