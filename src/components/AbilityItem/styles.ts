import styled from "styled-components";
import { CardDefault } from "../Cards/styles";

export const CardAbility = styled(CardDefault)`
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: center;
  font-size: 18px;
  gap: 10px;
  border: 1px solid #333;
  border-radius: 20px;
  transition: all ease-in 0.1s;
  cursor: default;

  @media (max-width:1024px) {
    padding: 20px;
    
  }
  @media (max-width:768px) {
    font-size: 14px
  }

  @media (max-width:480px) {
    padding: 20px 10px;
  }

  &:hover {
    animation: hoverAnimation 0.5s forwards;
    color: white;
  }

  svg {
    font-size: 46px;

    @media (max-width:768px) {
      font-size: 26px;
    }
  }

  @keyframes hoverAnimation {
  0% {
    background:  transparent ; /* Mantém a cor de fundo original */
  }
  60% {
    background: linear-gradient(145deg, #4fb4ff, #044aee);
  }
  100% {
    background: linear-gradient(145deg, #4fb4ff, #044aee);
  }
}
`