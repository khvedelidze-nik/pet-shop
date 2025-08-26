import styled from "styled-components";
import { StyledButtonLink } from "../../../shared/components/StyledButtons";

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
const StyledRemoveButton = styled(StyledButtonLink)`
  background-color: hsl(0, 100%, 40%);
  width: fit-content;
  height: 20px;

  &:hover {
    background-color: hsl(0, 100%, 50%);
  }
`;

export { StyledWrapper, StyledRemoveButton };
