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
  border: 1px solid ${props => props.theme.gray};
  background: ${props => props.theme.backgroundColor};
  background: linear-gradient(145deg, ${props => props.theme.colorModal1}, ${props => props.theme.colorModal2}); 
  box-shadow: 5px 5px 15px ${props => props.theme.boxShadowPrimary}, -5px -5px 15px ${props => props.theme.boxShadowSegundary};
  color: ${props => props.theme.colorTextPrimary};
  width: 150px;
  height: 60px;
  padding: 0 4px;
  cursor: pointer;
  transition: all ease-in .1s;
  border-radius: 50px;
  font-size: 16px;
  margin-top: 22px;


  @media (max-width: 480px) {
    margin: 0;
    width: 100%;
    height: 44px;
  }
  &:hover{
    transform: scale(1.03);
  }
`

