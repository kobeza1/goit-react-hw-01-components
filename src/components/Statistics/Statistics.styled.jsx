import styled from '@emotion/styled';
import { getRandomHexColor } from 'utils/RandomColor';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;

  background-color: ${props => props.theme.colors.beige};
  width: 800px;
  margin-bottom: ${props => props.theme.spacing(3)};
  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.4);
`;

export const Title = styled.h2`
  margin: ${props => props.theme.spacing(2)} 0;
  font-size: ${props => props.theme.fontSize.m};
  text-transform: uppercase;
`;

export const StatsList = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;

  }
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc((100%) / 5);
  padding: ${props => props.theme.spacing(2)};
  align-items: center;
  background-color: ${props => getRandomHexColor(props)};

  }
`;

export const Label = styled.span`
  font-size: ${props => props.theme.fontSize.s};
  margin-bottom: ${props => props.theme.spacing(1)};
  color: ${props => props.theme.colors.white};
`;

export const Percentage = styled.span`
  color: ${props => props.theme.colors.white};
`;
