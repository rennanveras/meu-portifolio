import styled from 'styled-components';

export const RedeSocialStyles = styled.ul`
  display: flex;
  gap: 14px;
  
  a {
    box-shadow: 5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff;
    border-radius: 6px;
    max-width: 60px;
    height: 45px;
    width: 45px;
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    background: #4fb4ff;
    background: linear-gradient(145deg, #4fb4ff, #044aee);
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
    
    svg {
      font-size: 30px;
      color: white
    }
  }
      
`