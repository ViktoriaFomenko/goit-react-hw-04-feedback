import PropTypes from 'prop-types';
import css from './NotificationMessage.module.css';

export const NotificationMessage = ({ message }) => {
  return <b className={css.message}>{message}</b>;
};

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
