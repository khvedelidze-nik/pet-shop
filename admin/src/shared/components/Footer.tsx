import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  max-width: 100vw;
  min-width: calc(100vw - 45px);
  height: 20px;
`;
const Footer = () => {
  return (
    <StyledFooter>
      <span>Footer</span>
    </StyledFooter>
  );
};

export default Footer;
