import styled from '@emotion/styled';

export const StaticContainer = styled.section`
  text-align: center;
`;

export const StatisticList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatisticListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: ${p => p.bgColor};
`;
// flex-basis: calc(100% / 3);
