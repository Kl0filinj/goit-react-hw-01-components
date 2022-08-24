import styled from '@emotion/styled';

export const FriendsListItem = styled.li`
  box-shadow: 0px 4px 21px 4px rgba(0, 0, 0, 0.32);
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  padding: 10px 0;
  border-radius: 6px;
`;

export const FriendsStatus = styled.span`
  padding: 7px;
  border-radius: 7px;
  margin: 0 10px;
  background-color: ${props => {
    switch (props.isOnline) {
      case false:
        return 'red';
      default:
        return 'green';
    }
  }};
`;

export const FriendsName = styled.p`
  margin-left: 15px;
  font-weight: 600;
  font-size: 18px;
`;
