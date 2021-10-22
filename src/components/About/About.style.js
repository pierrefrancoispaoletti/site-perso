import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const AvatarContainer = styled.div`
  width: 50%;
  height: auto;
  &:first-child {
    min-width: 300px;
    max-width: 20vw;
    height: auto;
  }
`;

export const PresentationContainer = styled.div`
  width: 50%;
  h2,
  h3 {
    text-decoration: underline;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
