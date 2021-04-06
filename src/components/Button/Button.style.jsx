import styled from "styled-components";
import { css } from "styled-components";

const ButtonStyles = css`
  background-color: #8c031c;
  color: white;
  border: none;
`;

const InvertedButtonStyles = css`
  background-color: rgba(255, 255, 255, 0.5);
  color: #8c031c;
  border: 1px solid #8c031c;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    color: #8c031c;
  }
`;

const TransparentButtonStyle = css`
  background-color: transparent;
  color: #8c031c;
  border: 1px solid #8c031c;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    color: #8c031c;
  }
`;

const getButtonStyles = (props) => {
  if (props.inverted) return InvertedButtonStyles;
  if (props.transparent) return TransparentButtonStyle;
  return ButtonStyles;
};

export const ButtonContainer = styled.button`
  justify-content: center;
  cursor: pointer;
  font-family: "Open Sans";
  font-size: 13px;
  height: 50px;
  padding: 0 28px 0 28px;
  outline: none;

  ${getButtonStyles}
`;
