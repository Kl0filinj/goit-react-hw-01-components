import { ProfileContainer, UserListStats, UserName, UserTag, UserListItem } from './Profile.styled'


export const Profile = ({username, tag, location, avatar, stats}) => {
    return (
<div>
  <ProfileContainer>
    <img
      src={avatar}
      alt="User avatar"
      width={'120px'}
      height={'130px'}
    />
    <UserName>{username}</UserName>
    <UserTag>@{tag}</UserTag>
    <UserTag>{location}</UserTag>
  </ProfileContainer>

  <UserListStats>
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
  </UserListStats>
</div>);
}