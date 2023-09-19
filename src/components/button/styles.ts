import styled from "styled-components";


export const AreaButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`
export const BtnDefault = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: #e2e8ec;
  background:linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff;
  color: #044aee;
  width: 150px;
  height: 60px;
  padding: 0 4px;
  cursor: pointer;
  transition: all ease-in .1s;
  border-radius: 10px;
  font-size: 16px;

  @media (max-width: 480px) {
    margin: 0;
    width: 100%;
    height: 44px;
  }
  &:hover{
    transform: scale(1.03);
  }
`

