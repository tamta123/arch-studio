import { Logo } from "@/svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterElement>
      <Link to="/">
        <LoboBox>
          <Logo dark={false} />
        </LoboBox>
      </Link>
      <FooterMenu>
        <Link to="/portfolio">
          <FooterLink>Portfolio</FooterLink>
        </Link>
        <Link to="/about">
          <FooterLink>About Us</FooterLink>
        </Link>
        <Link to="/contact">
          <FooterLink>Contact </FooterLink>
        </Link>
      </FooterMenu>
    </FooterElement>
  );
};

export default Footer;

const FooterElement = styled.footer`
  padding: 0 62px 48px 61px;
  background-color: var(--veryLightGrey);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoboBox = styled.div`
  padding: 48px 13px;
  background-color: var(--dark);
  width: fit-content;
  margin-top: -60px; // მარჯინზე პროცენტი არ მოქმედებს და პროცენტი არ უნდა დავუწეროთ
`;

const FooterMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterLink = styled.span`
  color: var(--mediumGrey);
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
`;
