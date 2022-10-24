import styled from '@emotion/styled';

export const Card = styled.div`
  background-color: ${props => props.theme.colors.beige};
  width: ${props => props.theme.spacing(40)};
  margin-bottom: ${props => props.theme.spacing(3)};
  margin-top: ${props => props.theme.spacing(3)};
  border-radius: 5px;
  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.4);
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
  border-radius: 5px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc((100%) / 3);
  :not(:last-child) {
    border-right: 1px solid;
    border-color: ${props => props.theme.colors.raspberry};
  }
  padding: ${props => props.theme.spacing(2)} 0;
`;

export const Label = styled.span`
  margin-bottom: ${props => props.theme.spacing(0.5)};
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
