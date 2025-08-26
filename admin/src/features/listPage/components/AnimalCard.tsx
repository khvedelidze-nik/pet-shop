import {
  StyledCard,
  StyledCardBtnWrapper,
  StyledCardEditBtn,
  StyledCardInfo,
} from "./styledComponents";

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

const AnimalCard = ({ id, data }: AnimalDataProps) => {
  return (
    <StyledCard>
      <StyledCardInfo>
        <span>{data.name}</span>
        <span>Price: ${data.price}</span>
        {data.description && <span>{data.description}</span>}
        {data.isPopular && <span>⭐ Popular</span>}
      </StyledCardInfo>
      <StyledCardBtnWrapper>
        <StyledCardEditBtn to={`/edit/animal/${id}`}>შეცვლა</StyledCardEditBtn>
      </StyledCardBtnWrapper>
    </StyledCard>
  );
};

export default AnimalCard;
