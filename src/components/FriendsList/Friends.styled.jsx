import styled from '@emotion/styled';

export const Friends = styled.ul`
  width: ${props => props.theme.spacing(40)};
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.theme.spacing(3)};
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.beige};
  padding: ${props => props.theme.spacing(2)};
  border-radius: 5px;
  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.4);

  :not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(2)};
  }
`;

export const Status = styled.span`
  display: block;
  width: ${props => props.theme.spacing(2)};
  height: ${props => props.theme.spacing(2)};
  border-radius: 50%;
  margin-right: ${props => props.theme.spacing(2)};
  background-color: ${({ status, theme }) =>
    status ? theme.colors.green : theme.colors.raspberry};
`;

export const Avatar = styled.img`
  margin-right: ${props => props.theme.spacing(3)};
`;
