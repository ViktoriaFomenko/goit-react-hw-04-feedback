import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const StatisticsList = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.statistics_list}>
      <li className={css.statistics_item}>Good: {good}</li>
      <li className={css.statistics_item}>Neutral: {neutral}</li>
      <li className={css.statistics_item}>Bad: {bad}</li>
      <li className={css.statistics_item}>Total: {total}</li>
      <li className={css.statistics_item}>
        PositivePercentage: {positivePercentage} %
      </li>
    </ul>
  );
};

StatisticsList.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
