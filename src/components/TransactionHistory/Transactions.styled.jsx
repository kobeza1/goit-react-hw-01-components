import styled from '@emotion/styled';

export const Table = styled.table`
  width: 800px;
  table-layout: fixed;
  border-collapse: collapse;
  border: 1px solid white;
  background-color: ${props => props.theme.colors.grayTable};
`;

export const Head = styled.thead`
  width: 100%;
  background-color: ${props => props.theme.colors.beige};
`;

export const HeadName = styled.th`
  text-transform: uppercase;
  padding-top: ${props => props.theme.spacing(2)};
  padding-bottom: ${props => props.theme.spacing(2)};
`;

export const Row = styled.tr`
  text-align: center;
`;

export const Body = styled.tbody`
  width: 100%;
  :nth-of-type(even) {
    background-color: ${props => props.theme.colors.white};
  }
`;

export const Cell = styled.td`
  padding-top: ${props => props.theme.spacing(2)};
  padding-bottom: ${props => props.theme.spacing(2)};
  font-size: ${props => props.theme.fontSize.s};
`;
