import styled from "styled-components";

export const FilePickerWrapper = styled.form`
  --radius: 0.4em;

  position: absolute;
  top: 0;
  height: 100%;

  // See the variable in /Tab/styled.ts
  left: var(--size);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  background-color: hsla(1deg, 0%, 100%, 0.5);
  border-radius: var(--radius);
`;

export const PickFileLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0.2em;
  cursor: pointer;
  white-space: nowrap;
  border: 0.1em dashed white;
  border-radius: 0.2em;
  height: 100%;

  &:hover {
    text-decoration: underline;
  }
`;

export const PickFile = styled.input`
  &[type="file"] {
    overflow: hidden;
    width: 0;
  }
`;

export const Controls = styled.div`
  display: flex;
`;

type RadioControlProps = {
  color: string;
};
export const RadioControl = styled.div<RadioControlProps>`
  display: flex;
  margin: 0.2em;
  justify-content: center;
  border-style: dotted;
  border-width: 0.1em;
  color: white;
  padding: 0.3em;
  border-radius: var(--radius);
  border-color: ${(props) => props.color};
  color: ${(props) => props.color};
`;

export const RadioLabel = styled.label`
  cursor: pointer;
`;

export const RadioInput = styled.input`
  &[type="radio"] {
  }
`;
