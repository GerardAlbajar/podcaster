import styled from 'styled-components';

export const Header = styled.div`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  padding: 10px;
  h1 {
    color: ${props => props.theme.colors.primary};
    margin: 0;
  }
`;

export const AppStyled = styled.section`
  padding: ${props => props.theme.spacing.medium};
`