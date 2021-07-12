import styled from 'styled-components';

// Title.styled.js
export const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;

  h1 {
    color: ${({ theme }) => theme.mainColors.maroon};
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
    color: #900603;
    background-color: transparent;
    border-radius: 20px;
    border-bottom: 5px solid grey;
  }

  p {
    color: ${({ theme }) => theme.mainColors.dark};
    background-color: transparent;
    color: whitesmoke;
    font-size: larger;
    border-radius: 20px;
    border-bottom: 5px solid grey;
    margin: 0;
  }
`;
