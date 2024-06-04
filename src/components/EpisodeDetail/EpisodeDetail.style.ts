import styled from 'styled-components';

export const EpisodeDetailContainer = styled.div`
  box-shadow: ${props => props.theme.shadows.standard};
  padding: ${props => props.theme.spacing.medium};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.medium};
  h3, p {
    margin: 0
  }
  p {
    font-style: italic;
  }
`;