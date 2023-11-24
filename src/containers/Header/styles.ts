import styled from "styled-components";
import { Container } from "../../global";

export const Header = styled.header`
  width: 100%;
  top: 0;
  left: 0;
  position: sticky;
  background-color: ${props => props.theme.backgroundColor};
  z-index: 997;
  box-shadow: 10px 10px 19px ${props => props.theme.boxShadowPrimary};
  
  h1 {
    text-transform: uppercase;
    font-size: 22px;
    font-weight: normal;
    cursor: default;

    img {
      height: 80px;
    }
  }
`

export const ContainerHeader = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 96px;
`


export const NavBar = styled.nav`
  @media (max-width: 900px) {
    display: none;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 28px;

    li {
      a {
        display: block;
        color: ${props => props.theme.textColorPrimary};
        text-transform: uppercase;
        transition: opacity ease-in .2s;
        font-size: 18px;
        cursor: pointer;

        &:hover  {
          opacity: 0.6;
        }
      }
    }
  }
`

