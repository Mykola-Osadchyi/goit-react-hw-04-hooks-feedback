import PropTypes from 'prop-types';
import s from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={s.list}>
    {options.map(btn => (
      <button
        key={btn.id}
        className={s.button}
        type="button"
        onClick={onLeaveFeedback}
      >
        {btn.name}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
