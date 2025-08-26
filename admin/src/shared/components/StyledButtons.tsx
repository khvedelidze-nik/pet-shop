import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
  all: unset;
  user-select: none;
  cursor: pointer;
  background-color: hsl(0, 0%, 0%);
  text-align: center;
  color: white;
  padding: 10px;
  border-radius: 10px;
  transition: 0.2s ease;

  &:hover {
    background-color: hsl(0, 0%, 20%);
  }
`;
const StyledButtonLink = styled(Link)`
  all: unset;
  user-select: none;
  cursor: pointer;
  background-color: hsl(0, 0%, 0%);
  text-align: center;
  color: white;
  padding: 10px;
  border-radius: 10px;
  transition: 0.2s ease;

  &:hover {
    background-color: hsl(0, 0%, 20%);
  }
`;
const StyledButtonNavLink = styled(NavLink)`
  all: unset;
  user-select: none;
  cursor: pointer;
  background-color: hsl(0, 0%, 0%);
  text-align: center;
  color: white;
  padding: 10px;
  border-radius: 10px;
  transition: 0.2s ease;

  &:hover {
    background-color: hsl(0, 0%, 20%);
  }

  &.active {
    background-color: hsl(0, 0%, 30%);
    &:hover {
      background-color: hsl(0, 0%, 50%);
    }
  }
`;

export { StyledButton, StyledButtonLink, StyledButtonNavLink };
