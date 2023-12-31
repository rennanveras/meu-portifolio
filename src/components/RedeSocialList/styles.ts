import styled from 'styled-components';

export const RedeSocialStyles = styled.ul`
  display: flex;
  gap: 14px;
  margin-top: 10px;
  position: relative;
  
  @media (max-width:468px){
    gap: 6px;
  }
`

export const BtnRedeSocial = styled.a`
    box-shadow: 5px 5px 15px ${props => props.theme.boxShadowPrimary}, -5px -5px 15px ${props => props.theme.boxShadowSegundary};
    border-radius: 6px;
    max-width: 60px;
    height: 45px;
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    background: ${props => props.theme.colorPrimary};
    background: linear-gradient(145deg, ${props => props.theme.colorTertiary}, ${props => props.theme.colorPrimary});
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
    
    svg {
      font-size: 30px;

      path {
        color: ${props => props.theme.white};
      }
    }
`

export const BtnCv = styled(BtnRedeSocial)`
  max-width: 100%;
  width: 100%;
  padding: 10px;
  color: white;
  margin-left: 10px;
  text-align: center;

  @media (max-width:468px){
    margin-left: 0;
    font-size: 12px;
  }
`