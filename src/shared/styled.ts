import type { CSSProperties } from "react";
import styled from "styled-components";

type ButtonProps = {
  variant: "filled" | "outlined";
  color?: CSSProperties["color"];
  bgColor?: CSSProperties["color"];
};

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) =>
    (props.variant === "filled" && props.bgColor) || "transparent"};
  color: ${(props) => props.color || "#fff"};
  border-radius: 0.5em;
  padding: 0.5em 0.8em;

  color: ${(props) => props.color};
  border: ${(props) =>
    props.variant === "outlined" && `.1em solid ${props.color}`};
`;

export const Container = styled.div`
  padding: 0em calc(50% - 600px);
  margin: 0em 1em;
`;

export const TwoColumnedMarkup = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 900px) {
    flex-direction: row;
    align-items: center;

    > * {
      flex: 1;
    }
  }
`;

export const LoadingText = styled.span`
  text-align: center;
  font-size: clamp(0.6rem, 1vw + 0.2em, 0.7rem);
  padding: 1em;
  color: hsl(360deg, 50%, 50%);
`;
