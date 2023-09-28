import { Container } from "../../global";
import { FooterContainer } from "./styles";

const Footer = () => {
  return(
    <FooterContainer>
      <Container>
        <p>&copy; copyright - coded by <a target="_blank" href="https://www.linkedin.com/in/rennan-veras/">rennanveras</a> - 2023</p>
      </Container>
    </FooterContainer>
  );
}

export default Footer;