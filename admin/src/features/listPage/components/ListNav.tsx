import {
  StyledCreateButton,
  StyledListNav,
  StyledListNavWrapper,
} from "./styledComponents";
import { StyledButtonNavLink } from "../../../shared/components/StyledButtons";

const ListNav = ({ type }: { type: string }) => {
  return (
    <StyledListNavWrapper>
      <StyledListNav>
        <StyledButtonNavLink to={"/list/animals"}>
          ცხოველები
        </StyledButtonNavLink>
        <StyledButtonNavLink to={"/list/categories"}>
          კატეგორიები
        </StyledButtonNavLink>
      </StyledListNav>
      <StyledCreateButton to={`/create/${type}`}>შექმნა</StyledCreateButton>
    </StyledListNavWrapper>
  );
};

export default ListNav;
