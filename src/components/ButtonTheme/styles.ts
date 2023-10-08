import styled from "styled-components";

export const BtnTheme = styled.button`
  background-color: ${props => props.theme.backgroundColor};
  padding: 8px;
  border: none;
  font-size: 22px;
  border: 1px solid ;
  display: flex;
  border-radius:50%;
  transition: all .4s ease-in-out;

  @media (max-width: 900px) {
    padding: 14px;
    font-size: 26px;
  }
  &:hover{
    background-color: ${props => props.theme.colorPrimary};
    path {
      color: ${props => props.theme.white};

    }
  }
  path {
    color: ${props => props.theme.colorTextPrimary};
    transition: color .4s ease-in-out;
  }
`