import {
  ButtonContainer,
  ActionButtons,
  ActionButton,
  SearchContainer,
  SearchInput,
  SearchButton,
  PopularSearches,
  PopularTag,
} from "./repair";

const RepairButton = ({ padding }: { padding: string }) => {
  const popularSearches = [
    "iPhone Repair",
    "Laptops",
    "Smart Watches",
    "Earbuds",
  ];

  return (
    <ButtonContainer>
      <ActionButtons>
        <ActionButton href="#">Buy</ActionButton>
        <ActionButton href="#">Sell</ActionButton>
        <ActionButton href="#">Repair</ActionButton>
      </ActionButtons>

      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search products, repairs, or services..."
        />
        <SearchButton>Search</SearchButton>
      </SearchContainer>

      <PopularSearches>
        <span style={{ fontSize: "0.875rem", marginRight: "0.5rem" }}>
          Popular:
        </span>
        {popularSearches.map((search, index) => (
          <PopularTag key={index}>{search}</PopularTag>
        ))}
      </PopularSearches>
    </ButtonContainer>
  );
};

export default RepairButton;
