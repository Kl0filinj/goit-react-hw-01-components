import { FriendListItem } from './FriendListItem';
import { Box } from '../Box';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <Box my="150px" mx="auto" maxWidth="250px" textAlign="center" as="ul">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
