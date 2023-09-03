import styled from "styled-components";
import { Hamburger, Logo, Close } from "@/svg";
import { BackDrop } from "@/components";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  const openMenu = () => {
    setShow(true);
  };
  const closeMenu = () => {
    setShow(false);
  };
  return (
    <HeaderElement>
      <Link to="/">
        <Logo dark={true} />
      </Link>
      {show ? (
        <Close clickHandler={closeMenu} />
      ) : (
        <Hamburger clickHandler={openMenu} />
      )}
      {show ? (
        <BackDrop>
          <MenuBox>
            <Link
              to="/portfolio"
              style={{ textDecoration: "none" }}
              onClick={closeMenu}
            >
              {/* ლინკს თუ აქვს ონკლიკ ფუნქიცა, ჯერ ონკლიკი ეშვება და შემდეგ გადამისამართდება მითითებულ გვერდზე */}
              <Text>Portfolio</Text>
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: "none" }}
              onClick={closeMenu}
            >
              <Text>About Us</Text>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none" }}
              onClick={closeMenu}
            >
              <Text>Contact</Text>
            </Link>
          </MenuBox>
        </BackDrop>
      ) : null}
      {/* iq rom gviweria rom jsx elementi unda iyos,
      gvtxovs rom aq raRac chavweroT, garda amisa Signit rasac chavwert aRiqmeba
      rogorc amis childreni */}
    </HeaderElement>
  );
};
export default Header;

const HeaderElement = styled.header`
  width: 100%;
  padding: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed; //ამის შემდეგ ყველა გვერდი უნდა ჩამოვწიოთ დივის სიმაღლით ქვემოთ
  top: 0;
  left: 0;
  z-index: 3;
  background-color: white;
`;

const MenuBox = styled.div`
  // es Segvidzlia ise iyos rom ბექდროფის ზემოდან გამოჩნდეს, მაგრამ ჩამოსქროლვის დროს ჰედერი აღარ ჩანს და ამიტომ ჯობია რომ მენიუც დავაფიქსიროთ
  padding: 39px 48px 42px 48px;
  background-color: var(--veryLightGrey);
  height: fit-content;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

const Text = styled.h3`
  color: var(--dark);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
`;
