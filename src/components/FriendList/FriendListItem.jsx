import { FriendsListItem, FriendsStatus } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsListItem>
      <FriendsStatus isOnline={isOnline}></FriendsStatus>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendsListItem>
  );
};
