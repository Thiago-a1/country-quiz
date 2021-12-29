import styled from "styled-components";

export const Container = styled.div`
  @keyframes skeleton-loading {
    0% {
      background-color: #FFF;
    }
    100% {
      background-color: #CCC;
    }
  }

  width: 464px;

  border-radius: 24px;

  background-color: #FFF;

  div {
    display: flex;
    justify-content: end;

    img {
      margin-top: -74px;
    }
  }
`;

export const SkeletonQuestionsContainer = styled.section`
  width: 100%;

  padding: 0 32px 32px 32px;
  margin-top: 16px;

  h2 {
    width: 373px;
    height: 36px;

    animation: skeleton-loading 1s linear infinite alternate;
  }

  .skeleton-button {
    content: ' ';
    width: 400px;
    height: 56px;

    margin-top: 32px;

    border-radius: 12px;

    animation: skeleton-loading 1s linear infinite alternate;
  }
`;