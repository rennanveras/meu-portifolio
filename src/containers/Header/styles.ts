import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  height: 96px;
  top: 0;
  left: 0;
  position: sticky;
  background-color: #ecf0f3;
  border-bottom: 1px solid #ccc;
  z-index: 997;

  h1 {
    text-transform: uppercase;
    font-size: 22px;
    font-weight: normal;
  }
`
export const NavBar = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }

  ul {
    display: flex;
    gap: 28px;

    li {
      
      a {
        display: block;
        color: #000;
        text-transform: uppercase;
        transition: opacity ease-in .2s;
        font-size: 18px;

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`

