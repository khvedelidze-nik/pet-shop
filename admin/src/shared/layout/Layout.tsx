import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const StyledLayout = styled.div`
  min-height: 100vh;
  position: relative;
`;
const StyledMain = styled.main`
  min-height: calc(100vh - 160px);
  max-width: calc(100vw - 40px);
  min-width: calc(100vw - 45px);
  padding: 20px;
`;

const Layout = () => {
  return (
    <StyledLayout>
      <header>
        <Navbar />
      </header>
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
