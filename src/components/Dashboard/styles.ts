import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 464px;
  height: 100vh;

  margin: auto;

  h1 {
    font-size: 36px;
    font-weight: 700;
    text-transform: uppercase;
    
    color: #fff;
  }

  @media (max-width: 769px) {
    height: 100vh;

    h1 {
      margin-top: 64px;
    }
  }
`;