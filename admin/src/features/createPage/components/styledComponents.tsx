import styled from "styled-components";
import { StyledInput } from "../../../shared/components/StyledInputs";

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

const StyledCreateForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const StyledCreateNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledCreateNav = styled.div`
  display: flex;
  width: 50%;
  gap: 10px;
`;
const StyledInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StyledNameInput = styled(StyledInput)`
  width: calc(100% - 20px);
`;
const StyledDescriptionInput = styled(StyledNameInput)`
  height: 60px;
`;
const StyledCheckboxWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
const StyledCheckbox = styled.input`
  all: unset;
  background-color: hsl(0, 0%, 95%);
  color: hsl(0, 0%, 100%);
  user-select: none;
  cursor: pointer;
  width: 16px;
  height: 16px;
  text-align: center;
  font-size: 16px;
  line-height: 16px;
  border-radius: 4px;

  &:hover {
    background-color: hsl(0, 0%, 100%);
  }

  &:checked {
    background-color: hsl(0, 0%, 0%);
    &::after {
      content: "✓";
    }
    &:hover {
      background-color: hsl(0, 0%, 20%);
    }
  }
`;
const StyledCheckboxLabel = styled.label`
  user-select: none;
  cursor: pointer;
  height: 16px;
  display: flex;
  gap: 10px;
`;

export {
  StyledWrapper,
  StyledCreateForm,
  StyledCreateNavWrapper,
  StyledCreateNav,
  StyledNameInput,
  StyledInputWrapper,
  StyledDescriptionInput,
  StyledCheckboxWrapper,
  StyledCheckbox,
  StyledCheckboxLabel,
};
