import styled from "styled-components";

export const BackgroundModal = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: rgba(236,240,243, .8);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: start;
  z-index: 999;
`

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  justify-content: center;
  border-radius: 20px;
  padding-bottom: 36px;
  z-index: 998;
  background: #ecf0f3;
  background: linear-gradient(145deg, #e2e8ec, #ffffff); 
  box-shadow: 5px 5px 15px #ccc, -5px -5px 15px #555;
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
    padding: 8px 0;
    cursor: pointer;
    margin-right: -10px;
    margin-top: 6px;
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
      border: 1px solid #ccc
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
      color: #9a9a9a;
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
  a {
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

    @media (max-width: 480px) {
      margin: 0;
      width: 100%;
      height: 44px;
    }
    &:hover{
      transform: scale(1.03);
    }
  }
      
`


export const AreaDesc = styled.div`
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    overflow: scroll; 
    height: 150px;
  }
`