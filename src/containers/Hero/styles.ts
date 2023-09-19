import styled from 'styled-components';



const HeroStyled = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  
  
  @media (max-width:768px){
    flex-direction: column;
  }

  
`

export default HeroStyled;

export const HeroRight = styled.div`
  display: flex;


  @media (max-width:768px){
    justify-content: center;
  }

  img {
    object-fit: cover;
    max-width: 400px;
    border-radius: 15px;
    background: rgb(236,240,243);
    background: linear-gradient(142deg, rgba(236,240,243,1) 31%, #e2e2e2 100%);
    @media (max-width:1024px){
      width: 320px;
    }
    @media (max-width:768px){
      width: 70%;
      display: flex;
      justify-content: center;
    }
    @media (max-width:414px){
      width: 100%;
    }
  }
`