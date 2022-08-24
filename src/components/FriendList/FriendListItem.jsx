import {
  FriendsListItem,
  FriendsStatus,
  FriendsName,
} from './FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsListItem>
      <FriendsStatus isOnline={isOnline}></FriendsStatus>
      <img src={avatar} alt="User avatar" width="48" />
      <FriendsName>{name}</FriendsName>
    </FriendsListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
