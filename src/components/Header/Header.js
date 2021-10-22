import React, { useEffect } from "react";
import {
  HeaderContainer,
  LinkContainer,
  LinkOption,
  Logo,
  LogoContainer,
  TitleContainer,
} from "./Header.style";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo
          src="./assets/LogoALVP.png"
          alt="logo d'alvp-developments, un rubik cube sous titré avec alvp-developments in code we trust"
        />
      </LogoContainer>
      <TitleContainer>
        <h1 className="first-title"></h1>
        <h2>Depuis 2019</h2>
      </TitleContainer>
      <LinkContainer>
        <LinkOption href="#about">À&nbsp;Propos</LinkOption>
        <LinkOption href="#services">Services</LinkOption>
        <LinkOption href="#tarifs">Tarifs</LinkOption>
        <LinkOption href="#contact">Contact</LinkOption>
      </LinkContainer>
    </HeaderContainer>
  );
};

export default Header;
