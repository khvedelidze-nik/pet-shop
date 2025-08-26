import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  max-width: 100vw;
  min-width: calc(100vw - 45px);
  height: 20px;
  line-height: 20px;
  display: flex;
  gap: 40px;
  flex-direction: row;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLink to={"/"}>მთავარი</StyledLink>
      <StyledLink to={"/list/animals"}>სია</StyledLink>
      <StyledLink to={"/create/animal"}>შექმნა</StyledLink>
    </StyledNavbar>
  );
};

export default Navbar;
