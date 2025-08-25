import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
  all: unset;
  user-select: none;
  cursor: pointer;
  background-color: #000;
  text-align: center;
  color: white;
  padding: 10px;
  border-radius: 10px;
  transition: 0.2s ease;

  &:hover {
    background-color: #333;
  }
`;
const StyledButtonLink = styled(NavLink)`
  all: unset;
  user-select: none;
  cursor: pointer;
  background-color: #000;
  text-align: center;
  color: white;
  padding: 10px;
  border-radius: 10px;
  transition: 0.2s ease;

  &:hover {
    background-color: #333;
  }

  &.active {
    background-color: #999;
  }
`;

export { StyledButton, StyledButtonLink };
