import { Profile } from './Profile/Profile'
import userData from './user.json';
console.log(userData)

export const App = () => {
  return (
    <Profile
  username={userData.username}
  tag={userData.tag}
  location={userData.location}
  avatar={userData.avatar}
  stats={userData.stats}
/>
  );
};
