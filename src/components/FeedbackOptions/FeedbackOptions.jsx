import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button
      key={option}
      type="button"
      name={option}
      className={css.btn}
      onClick={onLeaveFeedback}
    >
      {option}
    </button>
  ));
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
