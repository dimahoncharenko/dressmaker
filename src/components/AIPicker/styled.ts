import styled from "styled-components";

export const AIPickerWrapper = styled.div`
  --radius: 0.4em;

  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: var(--size);
  top: 0;
  background-color: hsla(1deg, 0%, 100%, 0.5);
  border-radius: var(--radius);
  height: 100%;
`;

export const AIPickerPrompt = styled.textarea`
  font-family: inherit;
  min-width: -webkit-fill-available;
  height: 100%;
  margin: 0.2em;
  border-radius: var(--radius);
`;

export const Controls = styled.div`
  display: flex;
  gap: 0.5em;
  justify-content: space-between;
`;

export const RadioButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RadioButtonLabel = styled.label`
  font-size: 0.5rem;
`;

export const RadioButton = styled.input`
  &[type="radio"] {
  }
`;

export const LoadingText = styled.span`
  text-align: center;
  font-size: clamp(0.6rem, 1vw + 0.2em, 0.7rem);
  padding: 1em;
  color: hsl(360deg, 50%, 50%);
`;
