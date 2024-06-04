import styled from 'styled-components';

export const PodcastDetailCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.spacing.medium};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.standard};
  transition: box-shadow 0.3s ease;
  img {
    width: 200px;
    heigth: 200px;
    margin-bottom: ${props => props.theme.spacing.medium};
  }

  @media screen and (max-width: 768px) {
    max-width: none
  }
`;

export const PodcastDetailCardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  border-top: 1px solid #dbdbdb;
  padding: ${props => props.theme.spacing.medium};
  gap: 5px;

  &:(not:last-child) {
    border-bottom: 1px solid #dbdbdb;
  }
  
  h3 {
    margin: 0;
  }

  span {
    font-style: italic;
  }
`