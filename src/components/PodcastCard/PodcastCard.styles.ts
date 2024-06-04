import styled from 'styled-components';

export const LinkStyled = styled.div`
  position: relative;
  margin-top: 100px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.standard};
  transition: box-shadow 0.3s ease;
  align-items: center;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const CardImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  left: 25%;
  top: -85px;
`;

export const CardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-top: 85px;
`;

export const CardTitle = styled.h2`
  margin: 0;
  font-size: 1.5em;
`;

export const CardDescription = styled.p`
  margin: 8px 0 0;
  color: #555;
`;
