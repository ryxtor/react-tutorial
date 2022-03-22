import PropTypes from 'prop-types';

export default function TodoItem(props) {
  const { id, description } = props;
  return (
    <li id={id} className="task">
      <p className="description">{description}</p>
    </li>
  );
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
