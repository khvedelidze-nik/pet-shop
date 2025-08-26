import styled from "styled-components";
import { StyledButtonLink } from "../../../shared/components/StyledButtons";

const StyledHomePageWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: hsl(0, 0%, 90%);
  padding: 10px;
  border-radius: 20px;
`;
const StyledContentWrapperRight = styled(StyledContentWrapper)`
  align-items: flex-end;
`;
const StyledBrowseBtnWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
const StyledBrowseBtn = styled(StyledButtonLink)`
  width: fit-content;
`;

const HomePage = () => {
  return (
    <StyledHomePageWrapper>
      <h1>Admin Panel</h1>
      <StyledContentWrapper>
        <h2>მონაცემთა სია</h2>
        <p>
          გადახედე შინაურ ცხოველებს და კატეგორიებს, შეცვალე ან წაშალე ძალიან
          მარტივად.
        </p>
        <StyledBrowseBtnWrapper>
          <StyledBrowseBtn to={"/list/animals"}>
            ცხოველების დათვალიერება
          </StyledBrowseBtn>
          <StyledBrowseBtn to={"/list/categories"}>
            კატეგორიების დათვალიერება
          </StyledBrowseBtn>
        </StyledBrowseBtnWrapper>
      </StyledContentWrapper>
      <StyledContentWrapperRight>
        <h2>მონაცემთა შექმნა</h2>
        <p>დაამატე ახალი ცხოველები ან კატეგორიები მონაცემებში.</p>
        <StyledBrowseBtnWrapper>
          <StyledBrowseBtn to={"/create/animal"}>
            ცხოველის შექმნა
          </StyledBrowseBtn>
          <StyledBrowseBtn to={"/create/category"}>
            კატეგორიის შექმნა
          </StyledBrowseBtn>
        </StyledBrowseBtnWrapper>
      </StyledContentWrapperRight>
    </StyledHomePageWrapper>
  );
};

export default HomePage;
