import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: transparent;
  text-align: center;
  padding: 30px ;
  color: ${props => props.theme.textColorSegundary};
  border-top: 1px solid ${props => props.theme.colorSegundary};


  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 400px) {
    font-size: 10px;
  }
  a {
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
`