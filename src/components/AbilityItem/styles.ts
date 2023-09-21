import styled from "styled-components";

export const AreaCardAbility = styled.section`
  text-align: center;
`

export const CardAbility = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: center;
  font-size: 18px;
  gap: 10px;
  border: 1px solid #333;
  border-radius: 20px;
  box-shadow: 5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff;
  transition: all ease-in 0.1s;

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