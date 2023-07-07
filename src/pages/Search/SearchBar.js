import { CloseSearchButton } from "../../components/Search/CloseButton";
import { SearchInput } from "../../components/Search/Input";

export const SearchBar = ({ searchQuery, onSearch, onReset }) => {
  return (
    <div className="search-books-bar">
      <CloseSearchButton onClose={onReset} />
      <SearchInput query={searchQuery} onChange={onSearch} />
    </div>
  );
};
