import styled from "styled-components";

import { ReactComponent as HeartFilledSVG } from "../../assets/heart-full.svg";
import Button from "../Button/Button";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 600px;
  align-items: center;
  padding-top: 50px;
  position: relative;

  &:hover {
    .favorite-icon {
      display: block;
    }

    .add-button {
      display: block;
    }
  }
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 90%;
  margin-bottom: 5px;
`;

export const ProductFooterContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  font-size: 0.6rem;
  font-family: "Open Sans";

  h2 {
    color: gray;
  }
  h3 {
    color: #8c031c;
    margin-top: 0px;
  }
`;

export const HeartFilled = styled(HeartFilledSVG)`
  position: absolute;
  top: 70px;
  right: 20px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: none;
  fill: white;
`;

export const RemoveIcon = styled.div`
  position: absolute;
  top: 70px;
  right: 20px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: none;
`;

export const AddButton = styled(Button)`
  position: absolute;
  bottom: 110px;
  width: 80%;
  height: 50px;
  display: none;
`;
