import styled from "styled-components";

export const CardProject = styled.li`
  background: linear-gradient(145deg, #e2e8ec, #ffffff); 
  box-shadow: 5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff;
  border-radius: 20px;
  padding: 20px;
  text-align: start;
  cursor: pointer;

  @media (max-width: 480px) {
    padding: 8px;
  }

  &:hover {
    img {
        transform: scale(1.1);
        
      }
    h3 {
      color: #044aee;
    }
  }
  
  
  .thumbnail {
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
  }
`