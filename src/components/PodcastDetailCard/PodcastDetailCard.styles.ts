import styled from 'styled-components';

export const PodcastDetailCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  img {
    width: 200px;
    heigth: 200px;
    margin-bottom: 20px;
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
  padding: 20px;
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