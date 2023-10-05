import { styled } from "styled-components";

export const ContainerProject = styled.section`
  text-align: center;

  @media (max-width: 480px){
      padding: 0;
    }

  .title {
    margin: 40px 0;
    font-size: 30px;
    text-transform: uppercase;

    @media (max-width: 480px){
      font-size: 24px;
      padding: 0;
    }
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
    color: ${props => props.theme.gray};
  }
`


