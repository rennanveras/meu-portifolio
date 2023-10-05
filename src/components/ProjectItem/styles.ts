import styled from "styled-components";
import { CardDefault } from "../Cards/styles";

export const CardProject = styled(CardDefault)`
  
  &:hover {
      img {
          transform: scale(1.1);
          
        }
      h3 {
        color: ${props => props.theme.colorPrimary};
      }
    }
`


export const Thumbnail = styled.div`
  border-radius: 20px;
    overflow: hidden;
    width: 100%;
    height: 200px;
    margin-bottom: 10px;

    @media (max-width: 480px) {
    height: 160px;
    }
    
    img {
      width: inherit;
      height: inherit;
      object-fit: cover;
      border-radius: 20px ;
      transition: all ease-in-out .2s;
    }

`