import { useEffect, useState } from "react";
import getResource from "../../../shared/utils/getResource";
import ListNav from "../components/ListNav";
import {
  StyledCardWrapper,
  StyledInputWrapper,
  StyledListForm,
  StyledSearchButton,
  StyledSearchInput,
  StyledWrapper,
} from "../components/styledComponents";
import CategoryCard from "../components/CategoryCard";

interface CategoryProps {
  id: string;
  data: {
    title: string;
    description?: string;
  };
}
const ListCategoriesPage = () => {
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getResource("categories");
        setCategories(res);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };

    fetchCategories();
  }, []);
  return (
    <div>
      <StyledWrapper>
        <ListNav type="category" />
        <StyledListForm>
          <StyledInputWrapper>
            <StyledSearchInput type="text" placeholder="ძიება" />
            <StyledSearchButton>ძებნა</StyledSearchButton>
          </StyledInputWrapper>
        </StyledListForm>
        <StyledCardWrapper>
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              data={category.data}
            />
          ))}
        </StyledCardWrapper>
      </StyledWrapper>
    </div>
  );
};

export default ListCategoriesPage;
