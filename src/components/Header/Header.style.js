import styled, { css } from "styled-components";

const titleStyle = css`
  font-family: "Noto Sans Mono", monospace;
  color: #efefef;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5em;
  background-color: black;
  color: white;
`;

export const LogoContainer = styled.div`
  align-self: center;
`;

export const Logo = styled.img`
  max-width: 100%;
  height: auto;
`;

export const TitleContainer = styled.div`
  margin: 12px 12px 24px 12px;
  display: flex;
  flex-direction: column;
  font-size: 0.8em;
  align-items: center;
  text-align: center;
  background-image: linear-gradient(to bottom right, #ed4264, #ffedbc);
  padding: 0.5em 0.8em;
  border-radius: 50px;
  border: 3px solid white;
  ${titleStyle}
`;

export const LinkContainer = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  &:not(:last-child) {
    margin-right: 1em;
  }
  @media (max-width: 530px) {
    flex-direction: column;
  }
`;

export const LinkOption = styled.a`
  display: inline-block;
  text-decoration: none;
  color: white;
  background-image: linear-gradient(to bottom right, black, black);
  padding: 1.2em;
  border-radius: 50px;
  font-size: 1.2em;
  font-weight: bold;
  min-width: 130px;
  text-align: center;

  &:hover {
    transition: all 0.8s;
    color: black;
    background: white;
  }
`;
