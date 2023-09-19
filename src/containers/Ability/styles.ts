import styled from "styled-components";


export const  ContentAbility = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  transition: all ease-in-out .5s;

  @media (max-width:768px) {
    grid-template-columns:repeat(2 ,  1fr );
  }

  
`