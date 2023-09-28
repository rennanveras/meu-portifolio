import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: transparent;
  text-align: center;
  padding: 30px ;
  color: #3c3e41;
  border-top: 1px solid #e0e0e0;


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