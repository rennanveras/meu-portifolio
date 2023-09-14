import { styled } from "styled-components";

export const ContainerProject = styled.section`
  margin: 50px 0;
  text-align: center;
  padding: 0 10px;

  .title {
    margin: 40px 0;
    font-size: 30px;
    text-transform: uppercase;
  }
`

export const ListProjects = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px 20px;

  @media ( max-width: 640px){
    grid-template-columns: 1fr;
  }
  
  h5 {
    font-size: 12px;
    color: #9a9a9a;
  }
`


