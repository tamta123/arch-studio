import { Arrow, Logo } from "@/svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterElement>
      <Link to="/" style={{ textDecoration: "none" }}>
        <LoboBox>
          <Logo dark={false} />
        </LoboBox>
      </Link>
      <FooterMenu>
        <Link to="/portfolio" style={{ textDecoration: "none" }}>
          <FooterLink>Portfolio</FooterLink>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <FooterLink>About Us</FooterLink>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <FooterLink>Contact </FooterLink>
        </Link>
        <Link to="/portfolio">
          <SeePortfolio>
            <Text>See Our Portfolio</Text>
            <Arrow dark={false}></Arrow>
          </SeePortfolio>
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
  margin-top: 33px;
  gap: 32px;
`;

const FooterLink = styled.span`
  color: var(--mediumGrey);
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
`;

const SeePortfolio = styled.button`
  padding: 25px 32px 22px 32px;
  display: flex;
  gap: 24px;
  align-items: center;
  background-color: var(--dark);
  border: none;
  margin-top: 31px;
`;

const Text = styled.h3`
  color: #fff;
  text-align: right;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 138.889% */
`;
