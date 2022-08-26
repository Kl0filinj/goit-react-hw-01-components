import styled from '@emotion/styled';

export const UserName = styled.p`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const UserTag = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-weight: 500;
  font-size: 20px;
  padding: 8px 0;
`;

export const UserListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid black;
  padding: 10px;
  flex-basis: calc(100% / 3);
`;
