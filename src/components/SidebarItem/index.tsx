import { Container } from './styles'

type Props = {
  Icon: string;
  Text: string;
  id?: string;
}

const SidebarItem = ({ Icon, Text, id }: Props) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 96;
      const offset = element.offsetTop - headerHeight;
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };
  return (
      <a onClick={() => scrollToSection(`${id}`)}>
        <Container >
            <Icon />
            {Text}
        </Container>
      </a>
  )
}

export default SidebarItem