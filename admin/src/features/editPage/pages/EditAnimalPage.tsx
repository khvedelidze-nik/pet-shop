import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  StyledRemoveButton,
  StyledWrapper,
} from "../components/styledComponents";
import deleteData from "../../../shared/utils/deleteData";
import getData from "../../../shared/utils/getData";

interface AnimalDataProps {
  id: string;
  data: {
    name: string;
    price: number;
    description?: string;
    isPopular?: boolean;
    inStock?: boolean;
  };
}

const EditAnimalPage: React.FC = () => {
  const params = useParams<{ id: string }>();
  const [animal, setAnimal] = useState<AnimalDataProps | null>(null);

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        if (params.id) {
          const res = await getData("animals", params.id);
          setAnimal(res);
        }
      } catch (err) {
        console.error("Failed to fetch animal:", err);
      }
    };

    fetchAnimal();
  }, [params.id]);

  if (!animal) {
    return <p>იტვირთება...</p>;
  }

  return (
    <StyledWrapper>
      <h1>{animal.data.name}</h1>
      {animal.data.description && <span>{animal.data.description}</span>}
      <p>${animal.data.price}</p>
      {animal.data.isPopular && <span>⭐ Popular</span>}
      {animal.data.inStock && <span>მარაგშია</span>}
      <StyledRemoveButton
        onClick={() => {
          deleteData("animals", params.id as string);
        }}
        to={"/list/animals"}
      >
        წაშლა
      </StyledRemoveButton>
    </StyledWrapper>
  );
};

export default EditAnimalPage;
