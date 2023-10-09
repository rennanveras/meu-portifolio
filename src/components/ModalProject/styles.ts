import styled from "styled-components";
import { CardDefault } from "../Cards/styles";
import { BtnDefault } from "../button/styles";

export const BackgroundModal = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: ${props => props.theme.backgroundModal};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: start;
  z-index: 999;
`

export const Modal = styled(CardDefault)`
  display: flex;
  flex-direction: column;
  width: 1000px;
  justify-content: center;
  border-radius: 20px;
  padding-bottom: 36px;
  z-index: 998;
  padding: 30px;
  padding-top: 0;
  
  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 20px 10px;
    padding-top: 0;
  }
  
`

export const AreaClose = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-right: 30px;
  
  svg {
    color: ${props => props.theme.textColorPrimary};
    padding: 8px 0;
    cursor: pointer;
    margin-right: -10px;
    margin-top: 6px;
  }

  span {
    width: 30px;
    height: 30px;
    position: relative;
    margin: 10px;


    &:after {
        content: '';
        height: 30px;
        border-left: 2px solid ${props => props.theme.textColorPrimary};
        position: absolute;
        transform: rotate(45deg);
        left: 28px;
    }

    &:before {
        content: '';
        height: 30px;
        border-left: 2px solid ${props => props.theme.textColorPrimary};
        position: absolute;
        transform: rotate(-45deg);
        left: 28px;
    }
  }
`


export const ContentModal = styled.div`
  display:flex ;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 1024px) {
    display: block;
  }
`

export const AreaInfo = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const ContentImg = styled.div`
  width: 60%;

  img {
      width: 100%;
      max-height:300px;
      object-fit: cover;
      border-radius: 20px;
      border: 1px solid ${props => props.theme.gray};
  }

  @media (max-width: 1024px) {
    width: 100%;
    img {
        width: 100%;
        max-height:300px;
        object-fit: cover;
        border-radius: 20px;
    }
  }
`

export const ContentDesc = styled.div`
  h5 {
      color: ${props => props.theme.gray};
    }

    h3 {
      font-size: 34px;
      font-weight: bold;
      margin-bottom: 14px;
    }
    p {
      margin-bottom: 20px;
    }
` 

export const ContentButtons = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 1024px) {
    width: 100%;
    justify-content: center;
    gap: 14px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const ButtonModal = styled(BtnDefault).attrs({ as: 'a'})`
  margin-top: 0;
`

export const AreaDesc = styled.div`
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    overflow-y: scroll; 
    height: 150px;
  }
`