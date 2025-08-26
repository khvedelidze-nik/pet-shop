import styled from "styled-components";
import { StyledInput } from "../../../shared/components/StyledInputs";
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
  gap: 10px;
`;
const StyledListNavWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;
const StyledListNav = styled.div`
  display: flex;
  width: 50%;
  gap: 10px;
`;
const StyledInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const StyledSearchInput = styled(StyledInput)`
  width: calc(80% - 30px);
`;
const StyledSearchButton = styled(StyledButton)`
  width: calc(20% - 30px);
`;
const StyledCreateButton = styled(StyledButtonLink)`
  background-color: hsl(100, 100%, 40%);
  width: calc(20% - 30px);

  &:hover {
    background-color: hsl(100, 100%, 50%);
  }
`;
const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StyledCard = styled.div`
  background-color: hsl(0, 0%, 85%);
  width: calc(100% - 20px);
  min-height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 20px;
  gap: 20px;
  padding: 10px;
`;
const StyledCardInfo = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  line-height: 40px;
  gap: 20px;
`;
const StyledCardBtnWrapper = styled.div`
  width: calc(20% - 15px);
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 10px;
`;
const StyledCardEditBtn = styled(StyledButtonLink)`
  background-color: hsl(30, 100%, 40%);
  width: 100%;
  height: 20px;

  &:hover {
    background-color: hsl(30, 100%, 50%);
  }
`;

export {
  StyledWrapper,
  StyledListForm,
  StyledListNavWrapper,
  StyledListNav,
  StyledInputWrapper,
  StyledSearchInput,
  StyledSearchButton,
  StyledCreateButton,
  StyledCardWrapper,
  StyledCard,
  StyledCardInfo,
  StyledCardBtnWrapper,
  StyledCardEditBtn,
};
