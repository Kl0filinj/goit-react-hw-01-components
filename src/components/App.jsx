import { Profile } from './Profile/Profile';
import { Statistic } from './Statistic/Statistic';
import { FriendList } from './FriendList/FriendList';
import userData from './user.json';
import staticData from './data.json';
import friendsData from './friends.json';

export const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistic title="Upload Stats" stats={staticData} />
      <FriendList friends={friendsData} />
    </>
  );
};
