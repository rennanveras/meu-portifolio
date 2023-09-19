import { styled, createGlobalStyle } from 'styled-components';

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    list-style: none;
    text-decoration: none;
  }
  
  body {
    background-color: #ecf0f3;
  }

  .fontMontserrat{
    font-family: 'Montserrat', sans-serif;
  }
`
export default EstiloGlobal;

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    padding:0 10px;
    
  }
  @media (max-width: 768px) {
    max-width: 1024px;
    width: 100%;
    padding:0 20px;
  }

  section {
    padding: 50px 0;
  }
`

