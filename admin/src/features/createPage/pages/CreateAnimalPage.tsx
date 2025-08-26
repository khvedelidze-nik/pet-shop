import { StyledButtonNavLink } from "../../../shared/components/StyledButtons";
import postData from "../../../shared/utils/postData";
import CreateAnimalForm from "../components/CreateAnimalForm";
import {
  StyledCreateNav,
  StyledCreateNavWrapper,
  StyledWrapper,
} from "../components/styledComponents";

const CreateAnimalPage = () => {
  const onFormSubmit = async (
    name: string,
    price: number,
    description: string,
    isPopular: boolean,
    inStock: boolean
  ) => {
    await postData(
      {
        name: name,
        price: price,
        description: description,
        isPopular: isPopular,
        inStock: inStock,
      },
      "animals"
    );
  };
  return (
    <StyledWrapper>
      <StyledCreateNavWrapper>
        <StyledCreateNav>
          <StyledButtonNavLink to={"/create/animal"}>
            ცხოველი
          </StyledButtonNavLink>
          <StyledButtonNavLink to={"/create/category"}>
            კატეგორია
          </StyledButtonNavLink>
        </StyledCreateNav>
      </StyledCreateNavWrapper>
      <CreateAnimalForm onFormSubmit={onFormSubmit} />
    </StyledWrapper>
  );
};

export default CreateAnimalPage;
