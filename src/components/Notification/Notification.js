import PropTypes from 'prop-types';

function Notification({ message }) {
  return <span>{message && <h4>{message}</h4>}</span>;
}

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
