import { useQuery } from '@apollo/client';
import { ALL_TODO } from '../../apollo/todos';

const TotalCount = () => {
    const { data } = useQuery(ALL_TODO);

    const completedTodosCount =
        data?.todos.filter((todo) => todo.isCompleted).length || null;

    return (
        <div id="completed-todos-count">
            {completedTodosCount > 0 ? (
                <div>{`You have completed ${completedTodosCount} ${
                    completedTodosCount > 1 ? 'todos' : 'todo'
                }`}</div>
            ) : null}
        </div>
    );
};

export default TotalCount;
