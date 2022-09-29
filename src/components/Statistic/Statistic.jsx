import { StatisticList, StatisticListItem } from './Statistic.styled';
import { Box } from '../Box';
import { getRandomHexColor } from '../../utils/getRandomHexColor';
import PropTypes from 'prop-types';

export const Statistic = ({ title = null, stats }) => {
  return (
    <Box textAlign="center" as="section">
      {title !== null && <h2>{title}</h2>}

      <StatisticList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticListItem key={id} bgColor={getRandomHexColor()}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </StatisticListItem>
        ))}
      </StatisticList>
    </Box>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
