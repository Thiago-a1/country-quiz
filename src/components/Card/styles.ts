import styled from 'styled-components';

export const Container = styled.div`
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

export const QuestionContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 0 32px 16px 32px;
  margin-top: 16px;

  img {
    width: 84px;

    margin-bottom: 8px;
  }

  h2 {
    font-size: 24px;
    line-height: 36px;
    font-weight: 700;

    margin-bottom: 8px;

    color: #2F527B;
  }

  div {
    margin-top: 16px;
    
    button {
      font-size: 18px;
      font-weight: 700;

      width: 116px;
      height: 56px;

      border: none;
      border-radius: 16px;

      background-color: #F9A826;
      color: #FFF;

      box-shadow: 0px 2px 4px rgba(252, 168, 47, 0.4);
    }
  }
`;

export const ResultContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 32px;

  img {
    width: 238px;
    margin-top: 16px;
  }

  div {
    flex-direction: column;

    text-align: center;

    margin-top: 72px;

    h2 {
      font-size: 48px;
      font-weight: 700;
      line-height: 72px;

      color: #1D355D;
    }

    p {
      font-size: 18px;
      font-weight: 400;
      line-height: 27px;

      color: #1D355D;

      span {
        font-size: 36px;
        font-weight: 700;
        line-height: 54px;

        color: #60BF88;
      }
    }

    button {
      font-size: 18px;
      font-weight: 600;
      line-height: 27px;

      width: 210px;
      height: 62px;

      border: 2px solid #1D355D;
      border-radius: 12px;

      background-color: transparent;
      color: #1D355D;
    }
  }
`;