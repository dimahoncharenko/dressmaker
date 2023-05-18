import styled from "styled-components";

export const TabWrapper = styled.div`
  --size: 10vw;

  width: var(--size);
  height: var(--size);

  cursor: pointer;

  @media screen and (min-width: 700px) {
    --size: 4em;
  }

  @media screen and (min-width: 900px) {
    --size: 5em;
  }
`;

export const TabIcon = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-contain: contain;
`;
