import { useNavigate } from "react-router-dom";
import { StyledButton } from "../../../shared/components/StyledButtons";
import {
  StyledCheckbox,
  StyledCheckboxLabel,
  StyledCheckboxWrapper,
  StyledCreateForm,
  StyledDescriptionInput,
  StyledNameInput,
  StyledInputWrapper,
} from "./styledComponents";
import { useState } from "react";

interface CreateFormProps {
  onFormSubmit: (
    name: string,
    price: number,
    description: string,
    isPopular: boolean,
    inStock: boolean
  ) => void;
}

const CreateAnimalForm = ({ onFormSubmit }: CreateFormProps) => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [isPopular, setIsPopular] = useState<boolean>(false);
  const [inStock, setInStock] = useState<boolean>(false);

  const navigate = useNavigate();

  const goToAnimals = () => {
    navigate("/list/animals");
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFormSubmit(name, price, description, isPopular, inStock);
    goToAnimals();
  };
  return (
    <StyledCreateForm onSubmit={onSubmit}>
      <StyledInputWrapper>
        <StyledNameInput
          type="text"
          placeholder="სახელი"
          onChange={(e) => setName(e.target.value)}
        />
        <StyledNameInput
          type="number"
          placeholder="ფასი"
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <StyledDescriptionInput
          type="text"
          placeholder="აღწერა"
          onChange={(e) => setDescription(e.target.value)}
        />
        <StyledCheckboxWrapper>
          <StyledCheckboxLabel htmlFor="isPopular">
            <StyledCheckbox
              type="checkbox"
              name="isPopular"
              id="isPopular"
              onChange={(e) => setIsPopular(e.target.checked)}
            />
            პოპულარულია
          </StyledCheckboxLabel>
          <StyledCheckboxLabel htmlFor="inStock">
            <StyledCheckbox
              type="checkbox"
              name="inStock"
              id="inStock"
              onChange={(e) => setInStock(e.target.checked)}
            />
            მარაგშია
          </StyledCheckboxLabel>
        </StyledCheckboxWrapper>
      </StyledInputWrapper>
      <StyledButton>შექმნა</StyledButton>
    </StyledCreateForm>
  );
};

export default CreateAnimalForm;
