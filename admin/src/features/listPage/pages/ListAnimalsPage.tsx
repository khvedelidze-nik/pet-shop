import { useEffect, useState } from "react";
import {
  StyledCardWrapper,
  StyledInputWrapper,
  StyledListForm,
  StyledSearchButton,
  StyledSearchInput,
  StyledWrapper,
} from "../components/styledComponents";
import getResource from "../../../shared/utils/getResource";
import AnimalCard from "../components/AnimalCard";
import ListNav from "../components/ListNav";

interface AnimalProps {
  id: string;
  data: {
    name: string;
    price: number;
    description?: string;
    isPopular?: boolean;
    inStock?: boolean;
  };
}

const ListAnimalsPage = () => {
  const [animals, setAnimals] = useState<AnimalProps[]>([]);
  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const res = await getResource("animals");
        setAnimals(res);
      } catch (err) {
        console.error("Failed to fetch animals:", err);
      }
    };

    fetchAnimals();
  }, []);
  console.log(animals);
  return (
    <StyledWrapper>
      <ListNav type="animal" />
      <StyledListForm>
        <StyledInputWrapper>
          <StyledSearchInput type="text" placeholder="ძიება" />
          <StyledSearchButton>ძებნა</StyledSearchButton>
        </StyledInputWrapper>
      </StyledListForm>
      <StyledCardWrapper>
        {animals.map((animal) => (
          <AnimalCard key={animal.id} id={animal.id} data={animal.data} />
        ))}
      </StyledCardWrapper>
    </StyledWrapper>
  );
};

export default ListAnimalsPage;
