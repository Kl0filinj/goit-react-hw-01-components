import { UserName, UserTag, UserListItem } from './Profile.styled';
import { Box } from '../Box';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box
      textAlign="center"
      border="2px solid black"
      borderBottom="transparent"
      maxWidth="250px"
      my="150px"
      mx="auto"
    >
      <div>
        <img src={avatar} alt="User avatar" width={'120px'} height={'130px'} />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserTag>{location}</UserTag>
      </div>

      <ul>
        <UserListItem>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </UserListItem>
        <UserListItem>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </UserListItem>
        <UserListItem>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </UserListItem>
      </ul>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
