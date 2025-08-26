import { StyledButtonNavLink } from "../../../shared/components/StyledButtons";
import postData from "../../../shared/utils/postData";
import CreateCategoryForm from "../components/CreateCategoryForm";
import { StyledCreateNav, StyledWrapper } from "../components/styledComponents";

const CreateCategoryPage = () => {
  const onFormSubmit = async (title: string, description: string) => {
    await postData(
      {
        title: title,
        description: description,
      },
      "categories"
    );
  };
  return (
    <StyledWrapper>
      <StyledCreateNav>
        <StyledButtonNavLink to={"/create/animal"}>ცხოველი</StyledButtonNavLink>
        <StyledButtonNavLink to={"/create/category"}>
          კატეგორია
        </StyledButtonNavLink>
      </StyledCreateNav>
      <CreateCategoryForm onFormSubmit={onFormSubmit} />
    </StyledWrapper>
  );
};

export default CreateCategoryPage;
