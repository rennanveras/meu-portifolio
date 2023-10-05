import styled from "styled-components";

export const MobileMenu = styled.div`
  display: none;
  cursor: pointer;
  
  @media (max-width: 900px){
    display: block;
  }
`