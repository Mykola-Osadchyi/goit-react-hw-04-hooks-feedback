import PropTypes from 'prop-types';
import s from './Feedback.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={s.statistics}>
    <span>Good: {good}</span>
    <span>Neutral: {neutral}</span>
    <span>Bad: {bad}</span>
    <span>Total: {total}</span>
    <span>Positive feedback: {Math.round(positivePercentage)}%</span>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
