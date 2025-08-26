import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  StyledRemoveButton,
  StyledWrapper,
} from "../components/styledComponents";
import getData from "../../../shared/utils/getData";
import deleteData from "../../../shared/utils/deleteData";

interface CategoryProps {
  id: string;
  data: {
    title: string;
    description?: string;
  };
}

const EditCategoryPage = () => {
  const params = useParams();
  const [category, setCategory] = useState<CategoryProps | null>(null);

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        if (params.id) {
          const res = await getData("categories", params.id);
          setCategory(res);
        }
      } catch (err) {
        console.error("Failed to fetch animal:", err);
      }
    };

    fetchAnimal();
  }, [params.id]);

  if (!category) {
    return <p>იტვირთება...</p>;
  }
  return (
    <StyledWrapper>
      <h1>{category.data.title}</h1>
      <p>{category.data.description}</p>
      <StyledRemoveButton
        onClick={() => {
          deleteData("categories", params.id as string);
        }}
        to={"/list/categories"}
      >
        წაშლა
      </StyledRemoveButton>
    </StyledWrapper>
  );
};

export default EditCategoryPage;
