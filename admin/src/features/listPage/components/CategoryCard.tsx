import {
  StyledCard,
  StyledCardBtnWrapper,
  StyledCardEditBtn,
  StyledCardInfo,
} from "./styledComponents";

interface CategoryDataProps {
  id: string;
  data: {
    title: string;
    description?: string;
  };
}
const CategoryCard = ({ id, data }: CategoryDataProps) => {
  return (
    <StyledCard>
      <StyledCardInfo>
        <span>{data.title}</span>
        {data.description && <span>{data.description}</span>}
      </StyledCardInfo>
      <StyledCardBtnWrapper>
        <StyledCardEditBtn to={`/edit/category/${id}`}>
          შეცვლა
        </StyledCardEditBtn>
      </StyledCardBtnWrapper>
    </StyledCard>
  );
};

export default CategoryCard;
