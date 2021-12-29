import styled, { css } from "styled-components";

type ButtonProps = {
  user: boolean;
  correct: boolean;
  userClicked: boolean;
}

export const Container = styled.button<ButtonProps>`
position: relative;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  width: 100%;
  height: 56px;
  padding: 0 16px;
  margin-top: 26px;

  border: 2px solid #6066D0;
  border-radius: 16px;

  color: #6066D0;

  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;

    color: #6066D0;
  }

  span {
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;

    margin-top: 2px;
    margin-left: 46px;
  }

  svg {
    position: absolute;
    right: 4%;
  }

  &:hover {
    border: 2px solid #F9A826;

    background-color: #F9A826;
    color: #FFF;

    h3 {
      color: #FFF;
    }
  }

  ${({correct, userClicked}) => 
    correct
      ? css`
        background-color: #60BF88;
        border: 2px solid #60BF88;
        color: #FFF;

        h3 {
          color: #FFF;
        }
      `
      : !correct && userClicked
      && css`
        background-color: #EA8282;
        border: 2px solid #EA8282;
        color: #FFF;

        h3 {
          color: #FFF;
        }
      ` };
`;