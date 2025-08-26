import { useState } from "react";
import { StyledButton } from "../../../shared/components/StyledButtons";
import {
  StyledCreateForm,
  StyledDescriptionInput,
  StyledNameInput,
  StyledInputWrapper,
} from "./styledComponents";
import { useNavigate } from "react-router-dom";

interface CreateCategoryProps {
  onFormSubmit: (title: string, description: string) => void;
}
const CreateCategoryForm = ({ onFormSubmit }: CreateCategoryProps) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const navigate = useNavigate();

  const goToCategories = () => {
    navigate("/list/categories");
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    goToCategories();
    onFormSubmit(title, description);
  };
  return (
    <StyledCreateForm onSubmit={onSubmit}>
      <StyledInputWrapper>
        <StyledNameInput
          type="text"
          placeholder="სახელი"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <StyledDescriptionInput
          type="text"
          placeholder="აღწერა"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </StyledInputWrapper>
      <StyledButton>შექმნა</StyledButton>
    </StyledCreateForm>
  );
};

export default CreateCategoryForm;
