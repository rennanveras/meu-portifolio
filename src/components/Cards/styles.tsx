import styled from "styled-components";

export const CardDefault = styled.div`
  background: linear-gradient(145deg, ${props => props.theme.colorModal1}, ${props => props.theme.colorModal2}); 
  box-shadow: 5px 5px 15px ${props => props.theme.boxShadowPrimary}, -5px -5px 15px ${props => props.theme.boxShadowSegundary};
  border-radius: 20px;
  padding: 20px;
  text-align: start;
  cursor: pointer;
  color: ${props => props.theme.colorTextPrimary};

  @media (max-width: 480px) {
    padding: 8px;
  }

`