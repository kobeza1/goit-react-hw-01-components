import styled from '@emotion/styled';

export const Card = styled.div`
  background-color: ${props => props.theme.colors.beige};
  width: ${props => props.theme.spacing(40)};
  margin-bottom: ${props => props.theme.spacing(3)};
  margin-top: ${props => props.theme.spacing(3)};
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacing(2)};
`;

export const Image = styled.img`
  height: ${props => props.theme.spacing(20)};
  margin-bottom: ${props => props.theme.spacing(1)};
`;

export const Name = styled.p`
  margin-bottom: ${props => props.theme.spacing(1)};
  :hover {
    color: ${props => props.theme.colors.white};
  }
`;

export const NickName = styled.p`
  margin-bottom: ${props => props.theme.spacing(1)};
  :hover {
    color: ${props => props.theme.colors.white};
  }
`;

export const Location = styled.p`
  margin-bottom: ${props => props.theme.spacing(1)};
  font-size: ${props => props.theme.fontSize.s};
  :hover {
    color: ${props => props.theme.colors.white};
  }
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-size: ${props => props.theme.fontSize.s};
  padding: ${props => props.theme.spacing(2)};
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  :not(:last-child) {
    margin-right: ${props => props.theme.spacing(3)};
  }
`;
