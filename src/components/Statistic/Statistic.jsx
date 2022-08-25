import {
  StaticContainer,
  StatisticList,
  StatisticListItem,
} from './Statistic.styled';
import { getRandomHexColor } from '../getRandomHexColor';
import PropTypes from 'prop-types';

export const Statistic = ({ title = null, stats }) => {
  console.log(stats);
  return (
    <StaticContainer>
      {title !== null && <h2>{title}</h2>}

      <StatisticList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticListItem key={id} bgColor={getRandomHexColor()}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </StatisticListItem>
        ))}
      </StatisticList>
    </StaticContainer>
  );
};

Statistic.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
