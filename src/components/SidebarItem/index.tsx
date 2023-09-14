import React from 'react'
import { Container } from './styles'

type Props = {
  Icon: string;
  Text: string;
  src?: string;
}

const SidebarItem = ({ Icon, Text, src }: Props) => {
  return (
      <a href={src}>
        <Container >
            <Icon />
            {Text}
        </Container>
      </a>
  )
}

export default SidebarItem