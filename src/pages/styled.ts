import styled from "styled-components";

export const Logo = styled.img`
  object-fit: contain;
  width: 6em;
  padding: 1em;
`;

export const HeadHeading = styled.h1`
  font-size: 5rem;
  text-transform: uppercase;
  margin: 0.5em 0em;
`;

export const BreakLine = styled.br`
  display: none;

  @media screen and (min-width: 800px) {
    display: block;
  }
`;

export const HeadParagraph = styled.p`
  text-align: justify;
  line-height: 1.7em;
  letter-spacing: 0.03em;
  font-size: clamp(1rem, 2vw + 0.02em, 1.3rem);
  color: hsl(270deg, 5%, 40%);
`;
