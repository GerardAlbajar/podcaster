import styled from 'styled-components';

export const SearchBarContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: flex-end;
    .search-bar-number__wrapper {
        background: #3878ae;
        color: #fff;
        width: fit-content;
        padding: 5px 8px;
        border-radius: 8px;
        height: fit-content;
    }
    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`;

export const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 300px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #7288ff;
    box-shadow: 0 0 5px rgba(114, 136, 255, 0.5);
  }
`;
