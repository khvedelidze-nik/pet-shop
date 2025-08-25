import styled from "styled-components";
import {
  StyledButton,
  StyledButtonLink,
} from "../../../shared/components/StyledButtons";

const StyledWrapper = styled.div`
  background-color: hsl(0, 0%, 90%);
  position: relative;
  padding: 20px;
  min-height: calc(100vh - 200px);
  max-width: calc(100vw - 80px);
  min-width: calc(100vw - 85px);
  border-radius: 20px;
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

const StyledListForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const StyledListNav = styled.div`
  display: flex;
  width: 50%;
  gap: 20px;
`;
const StyledInputWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const StyledInput = styled.input`
  all: unset;
  background-color: #eee;
  width: calc(70% - 20px);
  padding: 10px;
  border-radius: 10px;
  transition: 0.2s ease;

  &:focus {
    background-color: #fff;
  }
`;
const StyledSearchButton = styled(StyledButton)`
  width: calc(30% - 20px);
  padding: 10px;
`;
const StyledCreateButton = styled(StyledButton)`
  width: calc(100% - 20px);
  padding: 10px;
`;

const ListPage = () => {
  return (
    <div>
      <StyledWrapper>
        <StyledListNav>
          <StyledButtonLink to={"/list/Animals"}>Animals</StyledButtonLink>
          <StyledButtonLink to={"/list/Categories"}>
            Categories
          </StyledButtonLink>
        </StyledListNav>
        <StyledListForm>
          <StyledInputWrapper>
            <StyledInput type="text" placeholder="ძიება" />
            <StyledSearchButton>ძებნა</StyledSearchButton>
          </StyledInputWrapper>
          <StyledCreateButton>შექმნა</StyledCreateButton>
        </StyledListForm>
      </StyledWrapper>
    </div>
  );
};

export default ListPage;
