import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

export default function TodoContainer({ tasks }) {
  return (
    <ul className="task-inner-container">
      {
        tasks.map(
          (task) => (
            <TodoItem key={task.id} id={task.id} description={task.description} />
          ),
        )
      }
    </ul>
  );
}

TodoContainer.propTypes = {
  tasks: PropTypes.instanceOf(Array).isRequired,
};
