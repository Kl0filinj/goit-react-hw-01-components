import { FriendListItem } from './FriendListItem';
import { FriendsContainer } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsContainer>
      {friends.map(singleFriend => (
        <FriendListItem
          key={singleFriend.id}
          avatar={singleFriend.avatar}
          name={singleFriend.name}
          isOnline={singleFriend.isOnline}
        />
      ))}
    </FriendsContainer>
  );
};
