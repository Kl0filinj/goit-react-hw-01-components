import { Profile } from './Profile/Profile';
import { Statistic } from './Statistic/Statistic';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import userData from '../data/user.json';
import staticData from '../data/data.json';
import friendsData from '../data/friends.json';
import transactionsData from '../data/transactions.json';

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
      <TransactionHistory transactions={transactionsData} />
    </>
  );
};
