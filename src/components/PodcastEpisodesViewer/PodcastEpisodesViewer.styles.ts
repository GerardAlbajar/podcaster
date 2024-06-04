import styled from 'styled-components';

export const TableContainer = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: ${props => props.theme.shadows.standard};
`;

export const TableHeader = styled.th`
  padding: 16px;
  text-align: left;
  min-width: 150px;

  @media screen and (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }
`;

export const TableRow = styled.tr`
  &:hover {
    cursor: pointer;
    p {
        text-decoration: underline;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }
`;

export const TableCell = styled.td`
  padding: 16px;
  p {
    margin: 0;
    color: ${props => props.theme.colors.primary};
  }

  @media screen and (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }
`;
