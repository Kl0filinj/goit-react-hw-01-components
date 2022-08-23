import {
  StaticContainer,
  StatisticList,
  StatisticListItem,
} from './Statistic.styled';
import { getRandomHexColor } from '../getRandomHexColor';
import PropTypes from 'prop-types';
// console.log()

export const Statistic = ({ title = null, stats }) => {
  return (
    <StaticContainer>
      {title !== null && <h2>{title}</h2>}

      <StatisticList>
        {stats.map(stat => (
          <StatisticListItem key={stat.id} bgColor={getRandomHexColor()}>
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
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
