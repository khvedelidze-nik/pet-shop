import styled from "styled-components";

const StyledInput = styled.input`
  all: unset;
  background-color: hsl(0, 0%, 95%);
  padding: 10px;
  border-radius: 10px;
  transition: 0.2s ease;

  &:focus {
    background-color: hsl(0, 0%, 100%);
  }
  &:hover {
    background-color: hsl(0, 0%, 100%);
  }
`;

export { StyledInput };
