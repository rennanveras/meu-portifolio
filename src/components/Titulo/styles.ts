import styled from 'styled-components'

export const Titulo = styled.h2`
  padding: 40px 0;
  font-size: 30px;
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.textColorPrimary};
  @media (max-width: 678px) {
    padding: 22px 0;
    font-size: 24px;
  }
`